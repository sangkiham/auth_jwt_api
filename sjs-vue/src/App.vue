<template>
  <div id="spread-host">
    <gc-spread-sheets hostClass="spreadHost" @workbookInitialized="initWorkbook">
    </gc-spread-sheets>
  </div>
</template>

<script setup>
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import * as GC from "@grapecity/spread-sheets";
function initWorkbook(spread) {
   //spread 초기화
   let sheet = spread.getActiveSheet();
   //값 설정하기 - Text
   sheet.setValue(1, 1, "값 설정하기");
   //값 설정하기 - Number 
   sheet.setValue(2, 1, "Number");
   sheet.setValue(2, 2, 23)
   sheet.setValue(3, 1, "Text");
   sheet.setValue(3, 2, "GrapeCity")
   sheet.setValue(4, 1, "Datetime");
   //값 설정하기 - DateTime
   sheet.getCell(4, 2).value(new Date()).formatter("yyyy-mm-dd");
   //스타일 설정하기
   sheet.setColumnWidth(1, 200);
   sheet.setColumnWidth(2, 200);
   sheet.getRange(1, 1, 1, 2).backColor("rgb(130, 188, 0)").foreColor("rgb(255, 255, 255)");
   sheet.getRange(3, 1, 1, 2).backColor("rgb(211, 211, 211)");
   sheet.addSpan(1, 1, 1, 2);
   sheet.getRange(1, 1, 4, 2).setBorder(new GC.Spread.Sheets.LineBorder("Black", GC.Spread.Sheets.LineStyle.thin), {
     all: true
   });
   sheet.getRange(1, 1, 4, 2).setBorder(new GC.Spread.Sheets.LineBorder("Black", GC.Spread.Sheets.LineStyle.dotted), {
     inside: true
   });
   sheet.getRange(1, 1, 1, 2).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
}
</script>

<style>
.spreadHost {
  width: 800px;
  height: 800px;
}
</style>