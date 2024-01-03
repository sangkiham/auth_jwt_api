-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id bigint NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    activated boolean,
    nickname character varying(50) COLLATE pg_catalog."default",
    password character varying(100) COLLATE pg_catalog."default",
    username character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT uk_r43af9ap4edm43mmtq01oddj6 UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to sangkiham;
    
-- Table: public.authority

-- DROP TABLE IF EXISTS public.authority;

CREATE TABLE IF NOT EXISTS public.authority
(
    authority_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT authority_pkey PRIMARY KEY (authority_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.authority
    OWNER to sangkiham;
    

-- Table: public.user_authority

-- DROP TABLE IF EXISTS public.user_authority;

CREATE TABLE IF NOT EXISTS public.user_authority
(
    user_id bigint NOT NULL,
    authority_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_authority_pkey PRIMARY KEY (user_id, authority_name),
    CONSTRAINT fk6ktglpl5mjosa283rvken2py5 FOREIGN KEY (authority_name)
        REFERENCES public.authority (authority_name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkhi46vu7680y1hwvmnnuh4cybx FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_authority
    OWNER to sangkiham;    