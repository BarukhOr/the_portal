Commands for creating the database

db.staff.insert(
	[
		{'name' : 'Kufre Q Newton','imgUrl' : 'build/css/images/user3.jpg',username:'newtonk1','password':'12345!','job':[1,2]},
		{'name' : 'Sunny D Lux','imgUrl' : 'build/css/images/user2.jpg',username:'luxs1','password':'12345!','job':[1,2]},
		{'name' : 'Lin De Tron','imgUrl' : 'build/css/images/user4.jpg',username:'tronl1','password':'12345!','job':[1,2]},
		{'name' : 'John De Pual','imgUrl' : 'build/css/images/user7.jpg',username:'pualj1','password':'12345!','job':[1,2]},
		{'name' : 'Apanina Pasani','imgUrl' : 'build/css/images/user6.jpg',username:'pasania1','password':'12345!','job':[1,2]},
		{'name' : 'Medula Ombogotsu','imgUrl' : 'build/css/images/user5.jpg',username:'ombogotsum1','password':'12345!','job':[1,2]},
		{'name' : 'Ron De Tron','imgUrl' : 'build/css/images/user1.jpg',username:'tronr1','password':'12345!','job':[1,2]},
		{'name' : 'Fantastica Marcirani','imgUrl' : 'build/css/images/user7.jpg',username:'marciranif1','password':'12345!','job':[1,2]},
		{'name' : 'Marcirani The First','imgUrl' : 'build/css/images/user9.jpg',username:'firstmarc1','password':'12345!','job':[1,2]},
		{'name' : 'Macroani Limpus','imgUrl' : 'build/css/images/user6.jpg',username:'limpusm1','password':'12345!','job':[1,2]},
		{'name' : 'Linterd Magoni','imgUrl' : 'build/css/images/user1.jpg',username:'magonil1','password':'12345!','job':[1,2]},
		{'name' : 'Magoninaf Awersti','imgUrl' : 'build/css/images/user2.jpg',username:'awerstim1','password':'12345!','job':[3]},
		{'name' : 'Ziteri Beteri','imgUrl' : 'build/css/images/user3.jpg',username:'beteriz1','password':'12345!','job':[3]},
		{'name' : 'Tereere Absoute','imgUrl' : 'build/css/images/user4.jpg',username:'absoutet1','password':'12345!','job':[1,2]},
		{'name' : 'Megazoid Piza','imgUrl' : 'build/css/images/user7.jpg',username:'pizam1','password':'12345!','job':[1,2]},
		{'name' : 'Mark Newton','imgUrl' : 'build/css/images/user8.jpg',username:'newtonm1','password':'12345!','job':[1,2]},
		{'name' : 'UtibeAbasi Udo-Okon','imgUrl' : 'build/css/images/user3.jpg',username:'udookonu1','password':'12345!','job':[1,2]},
		{'name' : 'Nicholas Brenckle','imgUrl' : 'build/css/images/user8.jpg',username:'brencklen1','password':'12345!','job':[1,2]},
		{'name' : 'Kyle Stratoudakis','imgUrl' : 'build/css/images/user8.jpg',username:'stratoudakk1','password':'12345!','job':[1,2]}
	]
)

db.print_requests.insert(
	[
		{
			date_created:'March 26, 2016',
			author:'newtonk1',
			name: 'Kufre Q Newton',
			Event_Title:'1st Print Request',
			comment:'1st Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/2/1664/25831156336_c54acb15c6_n.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'luxs1',
			name: 'Sunny D Lux',
			Event_Title:'2nd Print Request',
			comment:'2nd Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/6/5173/5454526540_1b3622f863_b.jpg'],
			status:'completed',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'tronl1',
			name: 'Lin De Tron',
			Event_Title:'3rd Print Request',
			comment:'3rd Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/6/5494/11733772684_1733c7a1c9_b.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'pualj1',
			name: 'John De Pual',
			Event_Title:'4th Print Request',
			comment:'4th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2859/10368451304_5504f305f8.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'pasania1',
			name: 'Apanina Pasani',
			Event_Title:'5th Print Request',
			comment:'5th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'completed',
			assigned_to:''
		},
		{
			date_created:'March 2, 2016',
			author:'ombogotsum1',
			name: 'Medula Ombogotsu',
			Event_Title:'6th Print Request',
			comment:'6th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'tronr1',
			name: 'Ron De Tron',
			Event_Title:'7th Print Request',
			comment:'7th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/2/1664/25831156336_c54acb15c6_n.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'marciranif1',
			name: 'Fantastica Marcirani',
			Event_Title:'8th Print Request',
			comment:'8th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'completed',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'firstmarc1',
			name: 'Marcirani The First',
			Event_Title:'9th Print Request',
			comment:'9th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'March 21, 2016',
			author:'limpusm1',
			name: 'Macroani Limpus',
			Event_Title:'10th Print Request',
			comment:'10th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2859/10368451304_5504f305f8.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'magonil1',
			name: 'Linterd Magoni',
			Event_Title:'11th Print Request',
			comment:'11th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'March 26, 2016',
			author:'awerstim1',
			name: 'Magoninaf Awersti',
			Event_Title:'12th Print Request',
			comment:'12th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2859/10368451304_5504f305f8.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'March 27, 2016',
			author:'beteriz1',
			name: 'Ziteri Beteri',
			Event_Title:'13th Print Request',
			comment:'13th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'completed',
			assigned_to:''
		},
		{
			date_created:'March 27, 2016',
			author:'absoutet1',
			name: 'Tereere Absoute',
			Event_Title:'14th Print Request',
			comment:'14th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'March 27, 2016',
			author:'pizam1',
			name: 'Megazoid Piza',
			Event_Title:'15th Print Request',
			comment:'15th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'completed',
			assigned_to:''
		},
		{
			date_created:'March 27, 2016',
			author:'newtonm1',
			name: 'Mark Newton',
			Event_Title:'16th Print Request',
			comment:'16th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2859/10368451304_5504f305f8.jpg'],
			status:'unassigned',
			assigned_to:''
		},
		{
			date_created:'April 21, 2016',
			author:'newtonk1',
			name: 'Kufre Q Newton',
			Event_Title:'17th Print Request',
			comment:'17th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'in_progress',
			assigned_to:''
		},
		{
			date_created:'April 21, 2016',
			author:'luxs1',
			name: 'Sunny D Lux',
			Event_Title:'18th Print Request',
			comment:'18th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2859/10368451304_5504f305f8.jpg'],
			status:'pending',
			assigned_to:''
		},
		{
			date_created:'April 21, 2016',
			author:'tronl1',
			name: 'Lin De Tron',
			Event_Title:'19th Print Request',
			comment:'19th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'pending',
			assigned_to:''
		},
		{
			date_created:'April 21, 2016',
			author:'pualj1',
			name: 'John De Pual',
			Event_Title:'20th Print Request',
			comment:'20th Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c2.staticflickr.com/4/3666/10351554963_e06f348e93_h.jpg'],
			status:'pending',
			assigned_to:''
		},
		{
			date_created:'April 21, 2016',
			author:'pasania1',
			name: 'Apanina Pasani',
			Event_Title:'21st Print Request',
			comment:'21st Print Request',
			dimensions:'11x10',
			req_imgUrl:['https://c1.staticflickr.com/3/2856/10368443064_02a71fee4b_h.jpg'],
			status:'pending',
			assigned_to:''
		}
	]
)