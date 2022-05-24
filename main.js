listPlane = [
    {
        "id":1,
        "name":"eurofighter typhoon",
        "link":"https://upload.wikimedia.org/wikipedia/commons/8/85/German_eurofighter.JPG"
    },
    {
        "id":2,
        "name":"f-177",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/F-117_Nighthawk_Front.jpg/800px-F-117_Nighthawk_Front.jpg"
    },
    {
        "id":3,
        "name":"antonov an-225",
        "link":"https://upload.wikimedia.org/wikipedia/commons/b/b5/Antonov_Design_Bureau_Antonov_An-225_Mriya_at_Leipzig_Halle_%28EDDP-LEJ%29.jpg"
    },
    {
        "id":4,
        "name":"Concorde",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/British_Airways_Concorde_G-BOAC_03.jpg/300px-British_Airways_Concorde_G-BOAC_03.jpg"
    },
    {
        "id":5,
        "name":"sr-71",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lockheed_SR-71_Blackbird.jpg/300px-Lockheed_SR-71_Blackbird.jpg"
    },
    {
        "id":6,
        "name":"f-14",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/F-14_Tomcat_DF-SD-06-03497.jpg/300px-F-14_Tomcat_DF-SD-06-03497.jpg"
    },
    {
        "id":7,
        "name":"A6M",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/A6M3_Zero_N712Z_1.jpg/300px-A6M3_Zero_N712Z_1.jpg"
    },
    {
        "id":8,
        "name":"b-2",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/B-2_Spirit_original.jpg/300px-B-2_Spirit_original.jpg"
    },
    {
        "id":9,
        "name":"AV-8B Harrier II",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/AV-8B_VMA-542_HMS_Illustrious_2007.jpg/300px-AV-8B_VMA-542_HMS_Illustrious_2007.jpg"
    },{
        "id":10,
        "name":"F/A-18",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/McDonnell_Douglas_FA-18C_Hornet_of_VMFA-212_in_flight_over_the_South_China_Sea_on_8_October_2003_%286638451%29.jpg/300px-McDonnell_Douglas_FA-18C_Hornet_of_VMFA-212_in_flight_over_the_South_China_Sea_on_8_October_2003_%286638451%29.jpg"
    },{
        "id":11,
        "name":"MiG-21",
        "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/MiG-21_LanceR_taking_off_Romania_Oct_2009.jpg/300px-MiG-21_LanceR_taking_off_Romania_Oct_2009.jpg"
    }
]

proyect = [
    {
        "id":1,
        "name":"cohete",
        "description":"En proceso",
        "link":"./img/descarga.jpeg",
        "img":[]
    }
]


listPlane.forEach(plane => {
    document.getElementById("galery").innerHTML +=  `
    <div id="galery" class="col-4">
        <img
            src="${plane.link}"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="${plane.name}"
        />
    </div>
    `
});

proyect.forEach(proyect => {
    document.getElementById("proyectos").innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src="${proyect.link}" class="card-img-top" alt="error de carga">
            <div class="card-body">
                <h5 class="card-title">${proyect.name}</h5>
                <p class="card-text">${proyect.description}</p>
            <a href="${proyect.img}" class="btn btn-primary">Fotos</a>
        </div>
    </div>
    `
});