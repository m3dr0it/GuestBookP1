<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Thanks</title>
    <link rel="stylesheet" href="bootstrap-4.0.0/dist/css/bootstrap.css">
    <link rel="stylesheet" href="stylesheets/styleWelcome.css">
    <script src="javascripts/jquery-3.4.1.js"></script>
    <script lang="javascript" src="javascripts/js-xlsx-master/dist/xlsx.full.min.js"></script>
    <script lang="javascript" src="javascripts/FileSaver.js-master/dist/FileSaver.min.js"></script>

  </head>
  <body>
    <div class="col d-flex justify-content-center">
      <div class="card text-center">
          <div class="card-body">
            <h1><b>Daftar Tamu</b></h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Perusahaan</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {{#each data}}
                  <tr>
                    <th scope="row">{{no}}</th>
                    <td>{{nama}}</td>
                    <td>{{perusahaan}}</td>
                    <td>{{email}}</td>
                  </tr>
                  {{/each}}
              </table>
              <a href="" id="button-a" class="btn btn-sm btn-primary">Print</a>
          </div>
      </card>
      </div>
      <script>
          var wb = XLSX.utils.book_new();
          wb.Props = {
                  Title: "SheetJS Tutorial",
                  Subject: "Test",
                  Author: "Red Stapler",
                  CreatedDate: new Date(2017,12,19)
          };

          wb.SheetNames.push("Test Sheet");
          var ws_data = [['hello' , 'world']];
          var ws = XLSX.utils.aoa_to_sheet(ws_data);
          wb.Sheets["Test Sheet"] = ws;
          var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
          function s2ab(s) {
                  var buf = new ArrayBuffer(s.length);
                  var view = new Uint8Array(buf);
                  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                  return buf;

          }
          $("#button-a").click(function(){
                  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
          });
      </script>

  </body>
</html>
