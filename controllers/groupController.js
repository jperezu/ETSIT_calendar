
const {models} = require("../models");
const toCSV = require('array-to-csv')
const fs = require('fs');
const dateFormat = require('dateformat');

exports.getinfo = (req, res, next) => {
	let solicitud = new Array();
	let asignaturas = new Array();
	let asignadas = new Array();
	let schedule = new Array();
	let cuatrimestre = new Array();
	let exams = new Array(['Subject','Start Date','Start Time','End Date','End Time','All Day Event','Private']);
	req.body.asignaturas.forEach((subject) => {
		// console.log(subject + " "  + req.body.group[subject])
		 	solicitud.push({
	            name: subject,
	            group_id: req.body.group[subject]
	        });
		});

	 models.subject.findAll({attributes: ['name','group_id','parcial','parcial_start','parcial_end',
	 						'exam','exam_start','exam_end','group_id','day','start','end']})
	    .then(subjects => {
	    	subjects.forEach( asign => {
	    		let asignatura =
	    	{
	            name: asign.get({ plain: true })['name'],
	            group_id: asign.get({ plain: true })['group_id'],
	            parcial: asign.get({ plain: true })['parcial'],
	            parcial_start: asign.get({ plain: true })['parcial_start'],
	            parcial_end: asign.get({ plain: true })['parcial_end'],
	            exam: asign.get({ plain: true })['exam'],
	            exam_start: asign.get({ plain: true })['exam_start'],
	            exam_end: asign.get({ plain: true })['exam_end'],
	            group_id: asign.get({ plain: true })['group_id'],
	            day: asign.get({ plain: true })['day'],
	            start: asign.get({ plain: true })['start'],
	            end: asign.get({ plain: true })['end']
	        }
	     asignaturas.push(asignatura);
	     
		});//console.log(asignaturas);
	    	asignaturas.forEach(asignatura => {
	    		let exists = false;
	    		solicitud.forEach(solicita => {
	    			if((solicita.name == asignatura.name) && (solicita.group_id == asignatura.group_id)){
	    				exists = true;
	    			}
	    		});
	    		if (exists ==  true){ asignadas.push(asignatura);}
	    	});//console.log(asignadas);

	    	let week = ["DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"];
	    	models.calendar.findAll({attributes: ["date", "category"]})
	    	.then( days => {
	    		let start = new Date(days[0].date)
	    		for (start.setDate(start.getDate() + 1); start <= new Date(days[1].date); start.setDate(start.getDate() + 1)) {
	    			if ((start.getDay() >= 1) && (start.getDay() <= 5)){
	    				cuatrimestre.push({day:dateFormat(new Date(start), "m/d/yyyy"),tag:week[start.getDay()]});
	    			}
	    			
	    		}
	    		cuatrimestre.forEach( fecha => {
	    			 days.forEach(dia =>{
	    				if(fecha.day == dia.date){
	    					fecha.tag = dia.category;
	    				};
	    			});
	    		}); //console.log(cuatrimestre);
	    		let inside = false;
	    		asignadas.forEach(seleccion =>{
	    			inside = false;
	    			exams.forEach(repetido =>{
	    				if("Examen " + seleccion.name.replace(/-/g, " ") == repetido[0]){inside = true;return false;}
	    			});
	    			if (inside == false && seleccion.exam != null){
	    				exams.push(["Examen " + seleccion.name.replace(/-/g, " "),
	    							seleccion.exam,seleccion.exam_start,seleccion.exam,seleccion.exam_end, 'FALSE','TRUE']);
	    			}
	    			});
	    		inside = false;
	    		asignadas.forEach(seleccion =>{
	    			inside = false;
	    			exams.forEach(repetido =>{
	    				if("Parcial " + seleccion.name.replace(/-/g, " ") == repetido[0]){inside = true;return false;}
	    			});
	    			if (inside == false && seleccion.parcial != null){
	    				exams.push(["Parcial " + seleccion.name.replace(/-/g, " "),
	    							seleccion.parcial,seleccion.parcial_start,seleccion.parcial,seleccion.parcial_end, 'FALSE','TRUE']);
	    			}
	    			}); //console.log(exams);

	    		cuatrimestre.forEach( fecha => {
	    			 asignadas.forEach(dia =>{
	    				if(fecha.tag  == dia.day){
	    					schedule.push([dia.name.replace(/-/g, " "),
	    							fecha.day,dia.start,fecha.day,dia.end, 'FALSE','TRUE']);
	    				}
	    			});
	    		});// console.log(schedule);

		    	let datainfo = exams.concat(schedule);
		    	//console.log("CALENDARIO: ");
		    	//datainfo.forEach( dato => {console.log(dato);});
		    	let data_csv = toCSV(datainfo);
		    	fs.writeFile('calendario_1819.csv', data_csv, (err) => {  
			    if (err) throw err;
			    console.log('*** CSV creado ***');
				});

	    	}); 
	    	
	});

	res.render('done.ejs', {solicitud});
};
