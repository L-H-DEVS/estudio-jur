$(document).ready(function () {
  let especialidadesSection = $("#sec-listado-especialidades");

  $.ajax({
    type: "GET",
    url: "./data/datos.json",
    dataType: "json",
  }).done((data) => {
    //Poblando especialidades
    let especialidades = data.especialidades;
    let especialidadItems = "";

    $.each(especialidades, function (index, especialidad) {
      for (let i = 0; i < especialidad.tramitesItems.length; i++) {
        especialidadItems += `<li class="">${especialidad.tramitesItems[i].item}</li> `;
      }

      especialidadesSection.append(
        `<div class="especialidad col-lg-6">
            <h3 class="stage-title">${especialidad.especialidadName}</h3>
            <ul>${especialidadItems}</ul>
        </div>`
      );
    });
  });
});
