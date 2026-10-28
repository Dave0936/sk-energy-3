(function(){
const I='https://d8j0ntlcm91z4.cloudfront.net/user_3GEBhpJDThOL4J5Wt3PW565Nnud/';
const img=id=>I+id+'.png';
const HOME='SK Energy Homepage v2.dc.html';
const svcHref=s=>'Service.dc.html?slug='+s;
const caseHref=s=>'Case%20Study.dc.html?slug='+s;
const postHref=s=>'News%20Article.dc.html?slug='+s;

const steps=[
 {n:'01',title:'Initial consultation',text:'We get to know the property, how you use energy, your priorities and your budget. No obligation.'},
 {n:'02',title:'Survey and system design',text:'We assess the building and develop a technically appropriate design with an itemised, transparent quote.'},
 {n:'03',title:'Professional installation',text:'Our own engineers complete the work safely and carefully, with minimal disruption to your day.'},
 {n:'04',title:'Monitoring and aftercare',text:'We show you how your system is performing and stay on hand for maintenance and support.'}
];

const services=[
 {slug:'solar-pv',n:'01',title:'Solar PV',headline:'Power from your own roof.',standfirst:'Solar panels designed around your roof, shading and the way your home actually uses electricity.',
  img:img('hf_20260914_083236_6b42cd05-3e46-4c93-a40b-44737924029a'),alt:'Bungalow with black solar panels on a slate roof',
  intro:'A well-designed solar PV system starts with your usage, not the size of your roof. We model generation against how and when you use power, then specify panels, inverter and mounting to suit — including whether battery storage or EV charging should be planned in from day one.',
  benefits:[{t:'Lower electricity bills',x:'Use the power you generate during the day and import less from the grid.'},{t:'Designed for Scottish light',x:'Panels generate from daylight, not just sunshine. We model realistic year-round output.'},{t:'Ready for what comes next',x:'Inverters and wiring specified so batteries or EV chargers can be added later.'}],
  feature:{k:'Design first',t:'Every array is modelled before it is quoted.',x:'We check roof structure, orientation and shading, then show you expected generation and how much of it you are likely to use yourself.',img:img('hf_20261027_202221_e6ffe8fc-10d6-4bf4-a687-bec33063e28c'),alt:'Installer measuring a roof for panel layout'},
  fits:[{t:'Homes',x:'Roof or ground-mount arrays for detached, semi-detached and rural properties.'},{t:'Businesses',x:'Daytime-heavy sites where generation lines up with demand.'},{t:'New build',x:'Arrays specified into the build programme and signed off at handover.'}]},
 {slug:'battery-storage',n:'02',title:'Battery Storage',headline:'Keep the power you make.',standfirst:'Store surplus solar energy or cheaper off-peak electricity and use it when you need it most.',
  img:img('hf_20261027_202341_42f5c46f-787e-4fd6-8117-701675825100'),alt:'Home with solar panels and a battery by the side door',
  intro:'A battery lets you use more of the electricity your panels produce, or charge from the grid on a cheaper tariff and draw from storage at peak times. Whether it is worth it depends on your usage pattern and system size — and we will tell you honestly if it is not.',
  benefits:[{t:'Use more of your solar',x:'Surplus daytime generation is stored for the evening instead of exported cheaply.'},{t:'Make tariffs work for you',x:'Charge on off-peak rates and avoid importing at the most expensive times.'},{t:'Backup options',x:'Selected systems can keep essential circuits running during a power cut.'}],
  feature:{k:'Sized properly',t:'Bigger is not always better.',x:'We size storage to your evening and overnight demand so you are not paying for capacity you will never use.',img:img('hf_20261027_202220_ab4625c1-25be-4cff-9420-129f2aa4f016'),alt:'Wall-mounted battery in a tidy garage'},
  fits:[{t:'Existing solar',x:'Add storage to a system that is already exporting most of its output.'},{t:'New solar',x:'Design panels and battery together for the best overall result.'},{t:'No solar yet',x:'Tariff-led storage for homes not ready for panels.'}]},
 {slug:'heat-pumps',n:'03',title:'Heat Pumps',headline:'Warm rooms, quietly.',standfirst:'Air source heat pumps designed room by room, for comfortable low-carbon heating and hot water.',
  img:img('hf_20260914_083237_a5318e95-e922-4024-bdba-7624ac0372fe'),alt:'Air source heat pump unit beside a house',
  intro:'A heat pump only performs well when the whole system is designed properly. We calculate heat loss room by room, then size the heat pump, hot water cylinder and radiators or underfloor heating so your home stays comfortable at low flow temperatures.',
  benefits:[{t:'Lower carbon heating',x:'Replace gas, oil or LPG with heat drawn from the outside air.'},{t:'Steady, even warmth',x:'Low-temperature heating that keeps every room comfortable.'},{t:'Funding guidance',x:'We explain the grants and loans you may be eligible for before you commit.'}],
  feature:{k:'Heat loss first',t:'Sized to the building, not a rule of thumb.',x:'Room-by-room calculations mean the right unit, the right emitters and no cold corners.',img:img('hf_20261027_202220_34eb4eab-aa75-45b2-bdb7-ef9906a2bf06'),alt:'Engineer commissioning a hot water cylinder'},
  fits:[{t:'Off-gas homes',x:'Rural properties moving away from oil or LPG.'},{t:'Renovations',x:'Upgrades planned alongside insulation and new emitters.'},{t:'New build',x:'Heat pumps on every plot, coordinated with site trades.'}]},
 {slug:'ev-chargers',n:'04',title:'EV Chargers',headline:'Charge on the right hours.',standfirst:'Smart home, workplace and fleet charging with scheduling, monitoring and solar integration.',
  img:img('hf_20260914_085250_e01a120a-2741-42df-80e4-6144acd12e34'),alt:'Parent and child beside an electric car on charge at home',
  intro:'We install smart chargers that schedule around cheaper tariffs, balance load with the rest of your property and, where you have solar, can prioritise your own generation. For businesses we plan workplace and fleet charging around site capacity and growth.',
  benefits:[{t:'Smart scheduling',x:'Charge automatically on the cheapest — and cleanest — hours.'},{t:'Load management',x:'Chargers that protect your supply when other appliances are running.'},{t:'Solar diversion',x:'Top up the car from surplus solar instead of exporting it.'}],
  feature:{k:'Tidy installs',t:'Neat cable runs and a sensible location.',x:'We agree the charger position with you and check your supply before anything is fitted.',img:img('hf_20261027_202258_b6053f53-756d-41fd-b1a4-a4eb9bbf56d5'),alt:'Smart charger on a stone wall at dusk'},
  fits:[{t:'Homes',x:'Driveway and garage chargers for one or two cars.'},{t:'Workplaces',x:'Staff and visitor charging with access control.'},{t:'Fleets',x:'Depot charging planned around vehicle schedules.'}]},
 {slug:'underfloor-heating',n:'05',title:'Underfloor Heating',headline:'Comfort from the ground up.',standfirst:'Even, efficient heat distribution — the system SK Energy was built on, and a natural partner for heat pumps.',
  img:img('hf_20260911_171116_ba5847a5-693e-495c-8540-f6e07ff7310a'),alt:'Underfloor heating pipework being laid',
  intro:'SK Energy began as an underfloor heating company. That experience means we design pipe layouts, zoning and controls properly — so floors heat evenly and the system runs efficiently at the low temperatures heat pumps prefer.',
  benefits:[{t:'Even warmth',x:'Heat rises gently from the whole floor, with no cold spots.'},{t:'Heat pump friendly',x:'Large emitter area means lower flow temperatures and better efficiency.'},{t:'More usable space',x:'No radiators on the walls, so rooms are easier to furnish.'}],
  feature:{k:'Our roots',t:'Where SK Energy started.',x:'Underfloor heating is the foundation of our work, and it still shapes how we think about comfort in every system.',img:img('hf_20261027_202259_b3b21890-5a86-4953-8f58-e5ab628f2753'),alt:'Child on a warm oak floor'},
  fits:[{t:'Extensions',x:'Wet systems laid into new screeds.'},{t:'Whole ground floors',x:'Retrofits planned alongside a heat pump.'},{t:'New build',x:'Specified and laid to the build programme.'}]}
].map(s=>({...s,href:svcHref(s.slug)}));

const cases=[
 {slug:'kinross-farmhouse',num:'01',sector:'Residential retrofit',location:'Kinross',title:'Kinross farmhouse, off the oil',
  summary:'A 1920s stone farmhouse running on an oil boiler. Solar with storage, a 12 kW heat pump and underfloor heating through the ground floor, staged so the family stayed in the house throughout.',
  img:img('hf_20260915_135130_fcbd6790-43cc-4780-aa9a-015f5aa44ff2'),alt:'Stone farmhouse with solar panels',
  stats:[{v:'£34,600',l:'Budget'},{v:'£2,150/yr',l:'Energy saved'},{v:'3 weeks',l:'On site'}],
  systems:['6.8 kWp solar','10 kWh battery','12 kW ASHP','Underfloor heating'],completed:'March 2026',duration:'3 weeks',
  challenge:'Solid stone walls, an ageing oil boiler and a family who needed to stay living in the house. Heating bills were high and rising, and the ground floor was consistently cold.',
  solution:'We modelled heat loss room by room, then staged the work: solar and battery first, underfloor heating through the ground floor, and finally the heat pump and cylinder swap — so the house was never without heat.',
  results:'The oil tank has gone, the ground floor is evenly warm, and the family now uses most of their solar generation on site.',
  gallery:[{src:img('hf_20261027_202230_7837ea15-a003-487a-8955-94f3e67cfbb4'),alt:'Heat pump beside the farmhouse'},{src:img('hf_20261027_202258_c2b75f2f-fb83-4325-a765-07ce1dbc7065'),alt:'Warm ground floor after the retrofit'}],
  quote:{q:'The survey was the first one that told us what not to spend money on. The house has been warmer since.',name:'Claire M.',role:'Homeowner, Kinross'}},
 {slug:'rosyth-workshop',num:'02',sector:'Commercial',location:'Rosyth',title:'Rosyth engineering workshop',
  summary:'Daytime machine load made this an easy case for roof solar. Twenty-two panels on the flat roof, two workplace chargers by the door, and monitoring that shows exactly what the roof earns.',
  img:img('hf_20260914_083236_369e095f-2f73-44cc-bf52-abf54d15acc0'),alt:'Solar panels on a commercial flat roof',
  stats:[{v:'£18,400',l:'Budget'},{v:'41%',l:'Day load covered'},{v:'4.1 yrs',l:'Payback'}],
  systems:['9.9 kWp solar','2 × 7 kW chargers','Monitoring'],completed:'June 2026',duration:'6 days',
  challenge:'High daytime electricity costs from machinery, a flat roof with limited load capacity, and no downtime allowed during working hours.',
  solution:'A ballasted flat-roof array sized to the structure, installed around the working day, with two workplace chargers and live monitoring for the owners.',
  results:'The roof now covers a significant share of daytime demand, and staff charge on site from the same supply.',
  gallery:[{src:img('hf_20260914_083236_a9bbb227-93a3-4a2f-9012-b9872b6415a1'),alt:'Aerial view of panels'},{src:img('hf_20261027_202152_5fa5704f-e411-4faf-b807-47e7f9450f63'),alt:'Workplace chargers by the door'}],
  quote:{q:'Our bills were the problem. The quote landed within fifty pounds of the invoice.',name:'Dougie Hunter',role:'Owner, Rosyth'}},
 {slug:'halbeath-development',num:'03',sector:'New build',location:'Halbeath',title:'Halbeath, 26 plots on programme',
  summary:'Heat pump, underfloor and EV provision on every plot, sequenced with the developer\u2019s trades from first fix. Every plot handed over compliant, with commissioning packs ready for the buyer.',
  img:img('hf_20261027_202153_95e59ab4-8e19-448f-8bc5-dc71da09467f'),alt:'New-build homes with solar roofs',
  stats:[{v:'£412k',l:'Contract'},{v:'26',l:'Plots'},{v:'0',l:'Weeks lost'}],
  systems:['ASHP per plot','Underfloor heating','EV ready'],completed:'August 2026',duration:'Phased over build',
  challenge:'Twenty-six plots, a tight build programme and multiple trades on site — with every home needing to meet current energy standards at handover.',
  solution:'We worked from the drawings, sequencing first and second fix with the site team and preparing commissioning packs plot by plot.',
  results:'Every plot handed over compliant and on programme, with buyers given clear guidance on their systems.',
  gallery:[{src:img('hf_20260911_081803_5002f371-5b5e-4025-b615-8588fbe19323'),alt:'New-build street'},{src:img('hf_20261027_202152_43397c3d-a9b0-4df4-9733-8bc187aad254'),alt:'Heat pumps beside new homes'}],
  quote:{q:'Not a single week lost. They handled the sign-offs we usually chase.',name:'Ross Bain',role:'Site manager, Fife developer'}}
].map(c=>({...c,href:caseHref(c.slug)}));

const P=(t)=>({p:t}),H=(t)=>({h:t}),Q=(t)=>({q:t});
const posts=[
 {slug:'battery-worth-it',cat:'Solar & Battery',title:'Is a battery worth adding to your solar system?',excerpt:'How usage patterns, tariffs and system size affect whether storage makes sense for your home.',img:img('hf_20261027_202258_62170a2d-7ef7-4bbb-9f51-89ba35c34821'),alt:'Couple checking battery charge on a tablet',read:5,date:'14 Oct 2026',
  body:[P('Battery storage is one of the most common questions we are asked. The honest answer is that it depends on when you use electricity, how big your solar system is and which tariff you are on.'),H('When a battery makes sense'),P('If your home is empty during the day and your panels export most of what they generate, a battery lets you keep that energy for the evening.'),Q('A battery should be sized to your evening demand, not to the biggest unit available.'),H('When it might not'),P('If you are home during the day and already use most of your generation, the benefit is smaller. We will show you the numbers either way.')]},
 {slug:'scottish-weather-solar',cat:'Solar & Battery',title:'What Scottish weather really means for solar PV',excerpt:'Panels generate from daylight, not just sunshine. Here is what to expect through the seasons.',img:img('hf_20261027_202152_4e5f20f1-defe-49b2-8cbb-7a36c81056ae'),alt:'Cottage solar roof under grey skies',read:4,date:'2 Oct 2026',
  body:[P('Solar panels work from daylight, so they still generate on overcast days — just less than in bright sun.'),H('Summer versus winter'),P('Long Scottish summer days make up for shorter winter ones. Most generation happens between April and September.'),H('What we model'),P('We use your roof orientation, pitch and shading to estimate realistic output month by month.')]},
 {slug:'preparing-for-heat-pump',cat:'Heating',title:'Preparing your home for a heat pump',excerpt:'Heat loss, radiators and hot water: the questions to ask before you switch from gas or oil.',img:img('hf_20261027_202317_a33b2e41-3941-4d9c-aad4-8e5473562bd7'),alt:'Engineer and homeowner reviewing a heat loss survey',read:6,date:'24 Sep 2026',
  body:[P('A heat pump runs best at lower flow temperatures than a boiler, so the rest of the heating system matters.'),H('Start with heat loss'),P('A room-by-room heat loss calculation tells us how much heat each space needs and whether existing radiators are big enough.'),Q('The right design matters more than the brand on the unit.'),H('Hot water'),P('Most homes will need a heat-pump-compatible cylinder. We will check space and location during the survey.')]},
 {slug:'underfloor-heat-pumps',cat:'Heating',title:'Why underfloor heating pairs well with heat pumps',excerpt:'Lower flow temperatures and even warmth make the two a natural match in many homes.',img:img('hf_20261027_202318_948da880-14d8-4b95-b592-06e6eda26ff6'),alt:'Underfloor heating manifold and pipe loops',read:4,date:'10 Sep 2026',
  body:[P('Underfloor heating spreads heat across the whole floor, so it can run at lower temperatures than radiators.'),H('Why that helps'),P('Heat pumps are most efficient at low flow temperatures, so the two work well together.'),H('Retrofit or new'),P('It is simplest in extensions and new builds, but whole-floor retrofits are often possible too.')]},
 {slug:'choosing-smart-ev-charger',cat:'EV Charging',title:'Choosing a smart home EV charger',excerpt:'Scheduling, load management and solar diversion explained in plain English.',img:img('hf_20261027_202318_454a1d76-fd40-4652-8b3c-5e88e4fccb44'),alt:'Phone app scheduling overnight charging',read:5,date:'28 Aug 2026',
  body:[P('A smart charger does more than charge the car. It can schedule around tariffs, protect your supply and use surplus solar.'),H('Scheduling'),P('Set the charger to run overnight on a cheaper rate, automatically.'),H('Load management'),P('If the house is drawing a lot of power, the charger slows down to protect your main fuse.')]},
 {slug:'two-engineers-join',cat:'Company News',title:'Two more engineers join the Dunfermline team',excerpt:'Our installation team grows as demand for heat pumps and solar continues across Fife.',img:img('hf_20261027_202318_edd861ed-424a-48d7-9da6-585ad28e4195'),alt:'Two engineers beside a company van',read:2,date:'12 Aug 2026',
  body:[P('We are pleased to welcome two new engineers to our Dunfermline team.'),P('Both bring experience in heat pump and solar installation, and will help us keep survey-to-install times short through the winter.')]},
 {slug:'new-build-energy-early',cat:'Business',title:'Designing energy into a new-build development',excerpt:'Why coordinating renewables early with the build programme saves time and rework.',img:img('hf_20261027_202341_fd0d1f9a-2536-4bb0-b95c-06fdab98561d'),alt:'Site plans showing renewable positions',read:7,date:'30 Jul 2026',
  body:[P('On new-build sites, renewables work best when they are on the drawings from the start.'),H('Why early matters'),P('Pipe routes, cylinder space, roof layouts and EV provision all affect other trades.'),Q('Built in from the first drawing, not bolted on at handover.'),H('What we provide'),P('Specification, sequencing with site trades and commissioning packs for each plot.')]}
].map(p=>({...p,href:postHref(p.slug),readLabel:p.read+' min read'}));
const newsTabs=['All','Solar & Battery','Heating','EV Charging','Business','Company News'];

window.SK={IMG:I,HOME,services,cases,posts,newsTabs,steps,
  qs:k=>{try{return new URLSearchParams(location.search).get(k);}catch(e){return null;}}};
})();
