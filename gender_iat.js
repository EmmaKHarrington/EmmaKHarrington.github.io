define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();

return iatExtension({
      attribute1 : {
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Man'},
				{word: 'Son'},
				{word: 'Father'},
				{word: 'Boy'},
				{word: 'Uncle'},
				{word: 'Grandpa'},
				{word: 'Husband'},
				{word: 'Male'}	
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute2 :	{
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Mother'},
				{word: 'Wife'},
				{word: 'Aunt'},
				{word: 'Woman'},
				{word: 'Girl'},
				{word: 'Female'},
				{word: 'Grandma'},
				{word: 'Daughter'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : 
		{
			name : 'Teaching', 
			title : {
				media : {word : 'Teaching'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Kindergarten Teacher'},
				{word: 'High School Teacher'},
				{word: 'Principal'},
				{word: 'Professor'},
				{word: 'Special Education Teacher'},
				{word: 'Pre-K Teacher'},
				{word: 'Childcare Worker'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'} 
		},
		category2 : 
		{
			name : 'Medicine', 
			title : {
				media : {word : 'Medicine'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Nurse'},
				{word: 'Doctor'},
				{word: 'Physician Assistant'},
				{word: 'EMT (Emergency Medical Technician)'},
				{word: 'Respiratory Therapist'},
				{word: 'Surgeon'}, 
				{word: 'Home Health Aide'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		
		//The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
			fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_equal_CatAvsCatB : 'Your data suggest little or no automatic association between attribute2 and attribute1 with categoryA and categoryB..',
    });
});
