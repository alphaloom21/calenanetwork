import React, { useState, useMemo } from "react";

const DATA = {"members":[{"id":"AC-126225","name":"Kawika Souza","status":"At Risk","logged":55,"required":80,"remaining":25,"daysLeft":9,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Volunteer","org":"Hawai'i Foodbank","hours":13,"verified":true},{"date":"2026-12-08","type":"Work","org":"Bookshare Transcription","hours":19,"verified":true},{"date":"2026-12-14","type":"Work","org":"Kaua'i Community Garden","hours":23,"verified":false}],"monthlyIncome":596,"fplPct":46,"nearCeiling":false,"lastActive":0,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Clinic visit logged 2d ago","outreachTrail":[{"d":"0d ago","ch":"Email","r":"No response"},{"d":"5d ago","ch":"Mobile (SMS)","r":"Delivered"},{"d":"12d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-948749","name":"Tiare Tupou","status":"Behind","logged":10,"required":80,"remaining":70,"daysLeft":15,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-13","type":"Volunteer","org":"Aloha United Way 211","hours":10,"verified":false}],"monthlyIncome":385,"fplPct":30,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Email","lastTouchpoint":"Responded via Email 7d ago","outreachTrail":[{"d":"7d ago","ch":"Email","r":"Delivered"},{"d":"12d ago","ch":"Mobile (SMS)","r":"Bounced"},{"d":"19d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-733052","name":"David Kim","status":"On Track","logged":82,"required":80,"remaining":0,"daysLeft":16,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-25","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":7,"verified":true},{"date":"2026-12-28","type":"Work","org":"Keiki Literacy (Virtual)","hours":26,"verified":true}],"monthlyIncome":1728,"fplPct":132,"nearCeiling":true,"lastActive":4,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Clinic visit logged 6d ago","outreachTrail":[{"d":"4d ago","ch":"Phone call","r":"Delivered"},{"d":"9d ago","ch":"Phone call","r":"Bounced"},{"d":"16d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-205907","name":"Noelani Pascua","status":"On Track","logged":109,"required":80,"remaining":0,"daysLeft":13,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-08","type":"Work","org":"Catchafire Pro Bono","hours":11,"verified":true},{"date":"2026-12-08","type":"Volunteer","org":"Remote Tutoring Collective","hours":26,"verified":true},{"date":"2026-12-22","type":"Volunteer","org":"M\u0101lama Maui Beach Crew","hours":14,"verified":true}],"monthlyIncome":1442,"fplPct":111,"nearCeiling":false,"lastActive":3,"reach":"Reachable","lastChannel":"Mobile (SMS)","lastTouchpoint":"Checked member portal 3d ago","outreachTrail":[{"d":"3d ago","ch":"Mobile (SMS)","r":"No response"},{"d":"8d ago","ch":"Email","r":"No response"},{"d":"15d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-340174","name":"Wai Akana","status":"Behind","logged":20,"required":80,"remaining":60,"daysLeft":14,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-11","type":"Education","org":"Kupuna Care Network","hours":20,"verified":true}],"monthlyIncome":1643,"fplPct":126,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Responded via Phone call 7d ago","outreachTrail":[{"d":"7d ago","ch":"Phone call","r":"Delivered"},{"d":"12d ago","ch":"Member portal","r":"Bounced"},{"d":"19d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-514850","name":"Healani Cardenas","status":"Behind","logged":29,"required":80,"remaining":51,"daysLeft":6,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":6,"verified":true},{"date":"2026-12-19","type":"Work","org":"Remote Tutoring Collective","hours":23,"verified":true}],"monthlyIncome":1355,"fplPct":104,"nearCeiling":false,"lastActive":1,"reach":"Reachable","lastChannel":"Member portal","lastTouchpoint":"Responded via Member portal 1d ago","outreachTrail":[{"d":"1d ago","ch":"Member portal","r":"No response"},{"d":"6d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"13d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-757924","name":"Kalani Medeiros","status":"On Track","logged":123,"required":80,"remaining":0,"daysLeft":15,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-18","type":"Work","org":"Keiki Literacy (Virtual)","hours":20,"verified":true},{"date":"2026-12-25","type":"Work","org":"Hawai'i Foodbank","hours":23,"verified":true}],"monthlyIncome":1766,"fplPct":135,"nearCeiling":true,"lastActive":16,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 16d ago","outreachTrail":[{"d":"16d ago","ch":"In-person at CBO","r":"No response"},{"d":"21d ago","ch":"In-person at CBO","r":"Bounced"},{"d":"28d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-555884","name":"Kalani Latu","status":"On Track","logged":80,"required":80,"remaining":0,"daysLeft":10,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-12","type":"Work","org":"Bookshare Transcription","hours":21,"verified":false},{"date":"2026-12-17","type":"Education","org":"Bookshare Transcription","hours":15,"verified":true},{"date":"2026-12-25","type":"Volunteer","org":"Big Island Food Pantry","hours":11,"verified":true}],"monthlyIncome":408,"fplPct":31,"nearCeiling":false,"lastActive":6,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 6d ago","outreachTrail":[{"d":"6d ago","ch":"Mail","r":"Delivered"},{"d":"11d ago","ch":"Email","r":"No response"},{"d":"18d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-352572","name":"Manoa Akana","status":"Behind","logged":5,"required":80,"remaining":75,"daysLeft":4,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Volunteer","org":"Kupuna Care Network","hours":5,"verified":true}],"monthlyIncome":1777,"fplPct":136,"nearCeiling":true,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 10d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"15d ago","ch":"Member portal","r":"Delivered"},{"d":"22d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-543692","name":"Esperanza Kauwe","status":"Behind","logged":34,"required":80,"remaining":46,"daysLeft":8,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-08","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":22,"verified":true},{"date":"2026-12-19","type":"Volunteer","org":"Hawaiian Humane Society","hours":12,"verified":true}],"monthlyIncome":1424,"fplPct":109,"nearCeiling":false,"lastActive":5,"reach":"Limited","lastChannel":"Email","lastTouchpoint":"Checked member portal 5d ago","outreachTrail":[{"d":"5d ago","ch":"Email","r":"No response"},{"d":"10d ago","ch":"Phone call","r":"Delivered"},{"d":"17d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-842225","name":"Keanu Kamaka","status":"At Risk","logged":54,"required":80,"remaining":26,"daysLeft":4,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-07","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":14,"verified":true},{"date":"2026-12-08","type":"Work","org":"Bookshare Transcription","hours":24,"verified":true}],"monthlyIncome":741,"fplPct":57,"nearCeiling":false,"lastActive":11,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 13d ago","outreachTrail":[{"d":"11d ago","ch":"Mail","r":"No response"},{"d":"16d ago","ch":"Email","r":"Bounced"},{"d":"23d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-198907","name":"Daniel Aquino","status":"On Track","logged":107,"required":80,"remaining":0,"daysLeft":13,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Bookshare Transcription","hours":23,"verified":true},{"date":"2026-12-04","type":"Volunteer","org":"Kupuna Care Network","hours":16,"verified":true},{"date":"2026-12-06","type":"Volunteer","org":"Hawaiian Humane Society","hours":20,"verified":false},{"date":"2026-12-21","type":"Education","org":"Keiki Literacy (Virtual)","hours":7,"verified":true},{"date":"2026-12-28","type":"Volunteer","org":"Aloha United Way 211","hours":8,"verified":true}],"monthlyIncome":958,"fplPct":73,"nearCeiling":false,"lastActive":3,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Checked member portal 3d ago","outreachTrail":[{"d":"3d ago","ch":"Email","r":"Delivered"},{"d":"8d ago","ch":"Mobile (SMS)","r":"Bounced"},{"d":"15d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-609231","name":"Kekoa Naki","status":"On Track","logged":135,"required":80,"remaining":0,"daysLeft":14,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-16","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":23,"verified":true},{"date":"2026-12-26","type":"Volunteer","org":"Remote Tutoring Collective","hours":18,"verified":true}],"monthlyIncome":936,"fplPct":72,"nearCeiling":false,"lastActive":3,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Seen at Kupuna Care Network 3d ago","outreachTrail":[{"d":"3d ago","ch":"Phone call","r":"Delivered"},{"d":"8d ago","ch":"Phone call","r":"No response"},{"d":"15d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-328275","name":"Nainoa Latu","status":"Behind","logged":37,"required":80,"remaining":43,"daysLeft":19,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Volunteer","org":"Bookshare Transcription","hours":13,"verified":false},{"date":"2026-12-28","type":"Volunteer","org":"Kaua'i Community Garden","hours":24,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":4,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 6d ago","outreachTrail":[{"d":"4d ago","ch":"Mail","r":"Delivered"},{"d":"9d ago","ch":"Mail","r":"No response"},{"d":"16d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-808011","name":"Sefo Kamaka","status":"Behind","logged":25,"required":80,"remaining":55,"daysLeft":5,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-11","type":"Job Training","org":"Bookshare Transcription","hours":6,"verified":true},{"date":"2026-12-19","type":"Work","org":"Big Island Food Pantry","hours":19,"verified":true}],"monthlyIncome":521,"fplPct":40,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 17d ago","outreachTrail":[{"d":"15d ago","ch":"Mail","r":"No response"},{"d":"20d ago","ch":"Member portal","r":"Bounced"},{"d":"27d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-237235","name":"Pua Kaaihue","status":"At Risk","logged":59,"required":80,"remaining":21,"daysLeft":16,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Kupuna Care Network","hours":24,"verified":true},{"date":"2026-12-03","type":"Work","org":"Bookshare Transcription","hours":10,"verified":true},{"date":"2026-12-22","type":"Work","org":"Aloha United Way 211","hours":5,"verified":true},{"date":"2026-12-23","type":"Volunteer","org":"Hawaiian Humane Society","hours":20,"verified":true}],"monthlyIncome":671,"fplPct":51,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 17d ago","outreachTrail":[{"d":"15d ago","ch":"Mail","r":"Delivered"},{"d":"20d ago","ch":"In-person at CBO","r":"No response"},{"d":"27d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-221035","name":"Makoa Faleolo","status":"Behind","logged":35,"required":80,"remaining":45,"daysLeft":6,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-04","type":"Work","org":"Remote Tutoring Collective","hours":6,"verified":true},{"date":"2026-12-09","type":"Volunteer","org":"Aloha United Way 211","hours":10,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Aloha United Way 211","hours":7,"verified":false},{"date":"2026-12-28","type":"Work","org":"Aloha United Way 211","hours":12,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":0,"reach":"Reachable","lastChannel":"Mobile (SMS)","lastTouchpoint":"Checked member portal today","outreachTrail":[{"d":"0d ago","ch":"Mobile (SMS)","r":"Delivered"},{"d":"5d ago","ch":"Mobile (SMS)","r":"Delivered"},{"d":"12d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-672092","name":"Makana Medeiros","status":"Exempt","logged":0,"required":80,"remaining":0,"daysLeft":20,"island":"Maui","exemptReason":"Former foster care","activities":[],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":1,"reach":"Reachable","lastChannel":"Member portal","lastTouchpoint":"Checked member portal 1d ago","outreachTrail":[{"d":"1d ago","ch":"Member portal","r":"Delivered"},{"d":"6d ago","ch":"Mail","r":"No response"},{"d":"13d ago","ch":"Mail","r":"Delivered"}],"exemptSource":"State eligibility category","exemptConfidence":"Medium"},{"id":"AC-143860","name":"Rose Cabral","status":"On Track","logged":137,"required":80,"remaining":0,"daysLeft":3,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-14","type":"Volunteer","org":"Remote Tutoring Collective","hours":16,"verified":true},{"date":"2026-12-26","type":"Job Training","org":"Keiki Literacy (Virtual)","hours":13,"verified":true},{"date":"2026-12-28","type":"Work","org":"Hawaiian Humane Society","hours":17,"verified":true},{"date":"2026-12-28","type":"Volunteer","org":"Catchafire Pro Bono","hours":28,"verified":false}],"monthlyIncome":885,"fplPct":68,"nearCeiling":false,"lastActive":16,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 16d ago","outreachTrail":[{"d":"16d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"21d ago","ch":"In-person at CBO","r":"No response"},{"d":"28d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-309267","name":"Tomas Pascua","status":"Behind","logged":29,"required":80,"remaining":51,"daysLeft":13,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-09","type":"Volunteer","org":"Hawaiian Humane Society","hours":12,"verified":true},{"date":"2026-12-27","type":"Volunteer","org":"Kupuna Care Network","hours":17,"verified":true}],"monthlyIncome":1221,"fplPct":94,"nearCeiling":false,"lastActive":14,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 14d ago","outreachTrail":[{"d":"14d ago","ch":"In-person at CBO","r":"No response"},{"d":"19d ago","ch":"Email","r":"Bounced"},{"d":"26d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-373903","name":"Leilani Souza","status":"On Track","logged":96,"required":80,"remaining":0,"daysLeft":3,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-17","type":"Volunteer","org":"Big Island Food Pantry","hours":16,"verified":true},{"date":"2026-12-23","type":"Education","org":"Kupuna Care Network","hours":12,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":9,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 9d ago","outreachTrail":[{"d":"9d ago","ch":"In-person at CBO","r":"No response"},{"d":"14d ago","ch":"Member portal","r":"Delivered"},{"d":"21d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-945687","name":"Keanu Kahalewai","status":"At Risk","logged":52,"required":80,"remaining":28,"daysLeft":13,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-10","type":"Work","org":"Aloha United Way 211","hours":16,"verified":true},{"date":"2026-12-22","type":"Volunteer","org":"Bookshare Transcription","hours":9,"verified":true},{"date":"2026-12-24","type":"Work","org":"Kupuna Care Network","hours":27,"verified":true}],"monthlyIncome":481,"fplPct":37,"nearCeiling":false,"lastActive":13,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 13d ago","outreachTrail":[{"d":"13d ago","ch":"Mail","r":"Delivered"},{"d":"18d ago","ch":"Email","r":"Delivered"},{"d":"25d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-415568","name":"Sina Lindsey","status":"On Track","logged":133,"required":80,"remaining":0,"daysLeft":2,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-08","type":"Volunteer","org":"Big Island Food Pantry","hours":13,"verified":true},{"date":"2026-12-11","type":"Volunteer","org":"Aloha United Way 211","hours":24,"verified":true},{"date":"2026-12-21","type":"Work","org":"Kaua'i Community Garden","hours":15,"verified":true},{"date":"2026-12-26","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":12,"verified":true}],"monthlyIncome":758,"fplPct":58,"nearCeiling":false,"lastActive":9,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Seen at Aloha United Way 211 9d ago","outreachTrail":[{"d":"9d ago","ch":"Mail","r":"No response"},{"d":"14d ago","ch":"Mail","r":"No response"},{"d":"21d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-148458","name":"Alana Kealoha","status":"On Track","logged":110,"required":80,"remaining":0,"daysLeft":21,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":10,"verified":true},{"date":"2026-12-23","type":"Education","org":"Habitat for Humanity Leeward","hours":24,"verified":true}],"monthlyIncome":467,"fplPct":36,"nearCeiling":false,"lastActive":6,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Checked member portal 6d ago","outreachTrail":[{"d":"6d ago","ch":"Mail","r":"No response"},{"d":"11d ago","ch":"Mobile (SMS)","r":"No response"},{"d":"18d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-329471","name":"Wai Kahananui","status":"On Track","logged":124,"required":80,"remaining":0,"daysLeft":18,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Education","org":"Bookshare Transcription","hours":23,"verified":true},{"date":"2026-12-09","type":"Volunteer","org":"Kaua'i Community Garden","hours":13,"verified":true},{"date":"2026-12-23","type":"Work","org":"Bookshare Transcription","hours":14,"verified":true},{"date":"2026-12-24","type":"Job Training","org":"Habitat for Humanity Leeward","hours":20,"verified":true},{"date":"2026-12-26","type":"Education","org":"Hawai'i Foodbank","hours":9,"verified":true}],"monthlyIncome":1082,"fplPct":83,"nearCeiling":false,"lastActive":6,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Checked member portal 6d ago","outreachTrail":[{"d":"6d ago","ch":"Phone call","r":"Delivered"},{"d":"11d ago","ch":"Member portal","r":"No response"},{"d":"18d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-452161","name":"Manoa Tupou","status":"On Track","logged":114,"required":80,"remaining":0,"daysLeft":4,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Education","org":"Keiki Literacy (Virtual)","hours":24,"verified":true},{"date":"2026-12-03","type":"Volunteer","org":"Remote Tutoring Collective","hours":10,"verified":true},{"date":"2026-12-07","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":20,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":6,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Clinic visit logged 8d ago","outreachTrail":[{"d":"6d ago","ch":"Phone call","r":"Delivered"},{"d":"11d ago","ch":"In-person at CBO","r":"Bounced"},{"d":"18d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-468845","name":"Tomas Kahale","status":"On Track","logged":104,"required":80,"remaining":0,"daysLeft":15,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Education","org":"Bookshare Transcription","hours":24,"verified":true},{"date":"2026-12-11","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":21,"verified":false},{"date":"2026-12-20","type":"Work","org":"Catchafire Pro Bono","hours":20,"verified":true}],"monthlyIncome":832,"fplPct":64,"nearCeiling":false,"lastActive":5,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Seen at Hawai'i Foodbank 5d ago","outreachTrail":[{"d":"5d ago","ch":"Mail","r":"Delivered"},{"d":"10d ago","ch":"Email","r":"No response"},{"d":"17d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-242291","name":"Healani Kahananui","status":"Behind","logged":11,"required":80,"remaining":69,"daysLeft":3,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-13","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":11,"verified":true}],"monthlyIncome":1017,"fplPct":78,"nearCeiling":false,"lastActive":0,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Checked member portal today","outreachTrail":[{"d":"0d ago","ch":"Phone call","r":"Delivered"},{"d":"5d ago","ch":"Email","r":"Delivered"},{"d":"12d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-364525","name":"Lono Naki","status":"Behind","logged":30,"required":80,"remaining":50,"daysLeft":2,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":26,"verified":false},{"date":"2026-12-05","type":"Education","org":"Hawaiian Humane Society","hours":4,"verified":false}],"monthlyIncome":1759,"fplPct":135,"nearCeiling":true,"lastActive":9,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 9d ago","outreachTrail":[{"d":"9d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"14d ago","ch":"Member portal","r":"Bounced"},{"d":"21d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-691364","name":"Keoni Souza","status":"Behind","logged":29,"required":80,"remaining":51,"daysLeft":10,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-04","type":"Work","org":"Remote Tutoring Collective","hours":11,"verified":true},{"date":"2026-12-13","type":"Job Training","org":"Big Island Food Pantry","hours":18,"verified":true}],"monthlyIncome":1720,"fplPct":132,"nearCeiling":true,"lastActive":3,"reach":"Reachable","lastChannel":"Member portal","lastTouchpoint":"Checked member portal 3d ago","outreachTrail":[{"d":"3d ago","ch":"Member portal","r":"Delivered"},{"d":"8d ago","ch":"In-person at CBO","r":"No response"},{"d":"15d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-179688","name":"Ululani Aquino","status":"At Risk","logged":55,"required":80,"remaining":25,"daysLeft":5,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-11","type":"Work","org":"Bookshare Transcription","hours":8,"verified":true},{"date":"2026-12-12","type":"Work","org":"Catchafire Pro Bono","hours":24,"verified":true},{"date":"2026-12-12","type":"Education","org":"Hawai'i Foodbank","hours":9,"verified":true},{"date":"2026-12-17","type":"Work","org":"Catchafire Pro Bono","hours":14,"verified":false}],"monthlyIncome":587,"fplPct":45,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Clinic visit logged 17d ago","outreachTrail":[{"d":"15d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"20d ago","ch":"Phone call","r":"Bounced"},{"d":"27d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-912270","name":"Sina Ah Sing","status":"On Track","logged":107,"required":80,"remaining":0,"daysLeft":20,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Work","org":"Hawaiian Humane Society","hours":27,"verified":true},{"date":"2026-12-09","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":12,"verified":true},{"date":"2026-12-15","type":"Education","org":"M\u0101lama Maui Beach Crew","hours":8,"verified":true},{"date":"2026-12-18","type":"Education","org":"M\u0101lama Maui Beach Crew","hours":28,"verified":true}],"monthlyIncome":638,"fplPct":49,"nearCeiling":false,"lastActive":13,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 13d ago","outreachTrail":[{"d":"13d ago","ch":"Mail","r":"Delivered"},{"d":"18d ago","ch":"Phone call","r":"Delivered"},{"d":"25d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-189771","name":"Esperanza Aquino","status":"On Track","logged":106,"required":80,"remaining":0,"daysLeft":17,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Work","org":"Kaua'i Community Garden","hours":21,"verified":true},{"date":"2026-12-22","type":"Volunteer","org":"Kupuna Care Network","hours":28,"verified":true},{"date":"2026-12-24","type":"Volunteer","org":"Big Island Food Pantry","hours":22,"verified":true}],"monthlyIncome":1723,"fplPct":132,"nearCeiling":true,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Seen at Kupuna Care Network 10d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"15d ago","ch":"Member portal","r":"No response"},{"d":"22d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-384076","name":"David Kanahele","status":"On Track","logged":94,"required":80,"remaining":0,"daysLeft":5,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-07","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":28,"verified":true},{"date":"2026-12-12","type":"Job Training","org":"Big Island Food Pantry","hours":12,"verified":true},{"date":"2026-12-17","type":"Volunteer","org":"Kaua'i Community Garden","hours":24,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":4,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Checked member portal 4d ago","outreachTrail":[{"d":"4d ago","ch":"Phone call","r":"Delivered"},{"d":"9d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"16d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-842411","name":"Anela Kahale","status":"At Risk","logged":57,"required":80,"remaining":23,"daysLeft":3,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-16","type":"Education","org":"Habitat for Humanity Leeward","hours":24,"verified":true},{"date":"2026-12-25","type":"Work","org":"Bookshare Transcription","hours":10,"verified":true}],"monthlyIncome":765,"fplPct":59,"nearCeiling":false,"lastActive":14,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Seen at Kupuna Care Network 14d ago","outreachTrail":[{"d":"14d ago","ch":"Mail","r":"Delivered"},{"d":"19d ago","ch":"In-person at CBO","r":"No response"},{"d":"26d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-153872","name":"Jasmine Santos","status":"On Track","logged":135,"required":80,"remaining":0,"daysLeft":17,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-02","type":"Volunteer","org":"Kupuna Care Network","hours":24,"verified":true},{"date":"2026-12-08","type":"Education","org":"Remote Tutoring Collective","hours":15,"verified":false}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Seen at Catchafire Pro Bono 15d ago","outreachTrail":[{"d":"15d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"20d ago","ch":"Member portal","r":"Bounced"},{"d":"27d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-735770","name":"Lia Naki","status":"At Risk","logged":79,"required":80,"remaining":1,"daysLeft":9,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Volunteer","org":"Catchafire Pro Bono","hours":8,"verified":false},{"date":"2026-12-07","type":"Work","org":"Big Island Food Pantry","hours":9,"verified":true},{"date":"2026-12-10","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":24,"verified":true},{"date":"2026-12-20","type":"Volunteer","org":"Bookshare Transcription","hours":19,"verified":true},{"date":"2026-12-23","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":15,"verified":true}],"monthlyIncome":1009,"fplPct":77,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Clinic visit logged 9d ago","outreachTrail":[{"d":"7d ago","ch":"Phone call","r":"Delivered"},{"d":"12d ago","ch":"Mobile (SMS)","r":"Bounced"},{"d":"19d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-377405","name":"Koa Pascua","status":"At Risk","logged":77,"required":80,"remaining":3,"daysLeft":8,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Work","org":"Kupuna Care Network","hours":14,"verified":true},{"date":"2026-12-13","type":"Volunteer","org":"Aloha United Way 211","hours":28,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Aloha United Way 211","hours":10,"verified":false},{"date":"2026-12-19","type":"Work","org":"Hawai'i Foodbank","hours":25,"verified":true}],"monthlyIncome":422,"fplPct":32,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Clinic visit logged 12d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"No response"},{"d":"15d ago","ch":"Mobile (SMS)","r":"Bounced"},{"d":"22d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-127121","name":"Sefo Faleolo","status":"On Track","logged":123,"required":80,"remaining":0,"daysLeft":20,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-21","type":"Work","org":"Catchafire Pro Bono","hours":11,"verified":true},{"date":"2026-12-27","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":24,"verified":true}],"monthlyIncome":804,"fplPct":62,"nearCeiling":false,"lastActive":1,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Clinic visit logged 3d ago","outreachTrail":[{"d":"1d ago","ch":"Email","r":"No response"},{"d":"6d ago","ch":"Member portal","r":"Bounced"},{"d":"13d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-464863","name":"Noelani Place","status":"On Track","logged":100,"required":80,"remaining":0,"daysLeft":5,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-02","type":"Work","org":"Keiki Literacy (Virtual)","hours":23,"verified":true},{"date":"2026-12-04","type":"Volunteer","org":"Bookshare Transcription","hours":16,"verified":true},{"date":"2026-12-13","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":15,"verified":true}],"monthlyIncome":1458,"fplPct":112,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 10d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"15d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"22d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-752878","name":"Esperanza Park","status":"At Risk","logged":68,"required":80,"remaining":12,"daysLeft":3,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-08","type":"Work","org":"Remote Tutoring Collective","hours":23,"verified":true},{"date":"2026-12-16","type":"Job Training","org":"Aloha United Way 211","hours":20,"verified":true},{"date":"2026-12-23","type":"Job Training","org":"Kupuna Care Network","hours":25,"verified":true}],"monthlyIncome":1675,"fplPct":128,"nearCeiling":true,"lastActive":9,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 11d ago","outreachTrail":[{"d":"9d ago","ch":"Mail","r":"Delivered"},{"d":"14d ago","ch":"Email","r":"No response"},{"d":"21d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-779172","name":"Faith Souza","status":"Behind","logged":31,"required":80,"remaining":49,"daysLeft":11,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-05","type":"Job Training","org":"Keiki Literacy (Virtual)","hours":13,"verified":true},{"date":"2026-12-05","type":"Job Training","org":"Keiki Literacy (Virtual)","hours":18,"verified":true}],"monthlyIncome":471,"fplPct":36,"nearCeiling":false,"lastActive":13,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Clinic visit logged 15d ago","outreachTrail":[{"d":"13d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"18d ago","ch":"In-person at CBO","r":"No response"},{"d":"25d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-456385","name":"Kainoa Naki","status":"Behind","logged":32,"required":80,"remaining":48,"daysLeft":10,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-16","type":"Education","org":"Aloha United Way 211","hours":24,"verified":true},{"date":"2026-12-25","type":"Work","org":"Remote Tutoring Collective","hours":8,"verified":true}],"monthlyIncome":934,"fplPct":72,"nearCeiling":false,"lastActive":5,"reach":"Limited","lastChannel":"Email","lastTouchpoint":"Checked member portal 5d ago","outreachTrail":[{"d":"5d ago","ch":"Email","r":"Delivered"},{"d":"10d ago","ch":"Phone call","r":"Delivered"},{"d":"17d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-297816","name":"Faith Lee","status":"Behind","logged":15,"required":80,"remaining":65,"daysLeft":20,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-26","type":"Volunteer","org":"Hawaiian Humane Society","hours":15,"verified":true}],"monthlyIncome":1756,"fplPct":135,"nearCeiling":true,"lastActive":9,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Clinic visit logged 11d ago","outreachTrail":[{"d":"9d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"14d ago","ch":"Mobile (SMS)","r":"Bounced"},{"d":"21d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-619389","name":"John Medeiros","status":"Behind","logged":8,"required":80,"remaining":72,"daysLeft":18,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-05","type":"Volunteer","org":"Kupuna Care Network","hours":8,"verified":false}],"monthlyIncome":1066,"fplPct":82,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 10d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"No response"},{"d":"15d ago","ch":"In-person at CBO","r":"No response"},{"d":"22d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-178463","name":"Healani Medeiros","status":"On Track","logged":96,"required":80,"remaining":0,"daysLeft":12,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Volunteer","org":"Catchafire Pro Bono","hours":28,"verified":true},{"date":"2026-12-04","type":"Job Training","org":"Catchafire Pro Bono","hours":8,"verified":true},{"date":"2026-12-08","type":"Education","org":"M\u0101lama Maui Beach Crew","hours":7,"verified":true},{"date":"2026-12-13","type":"Education","org":"Catchafire Pro Bono","hours":27,"verified":true},{"date":"2026-12-14","type":"Work","org":"Hawai'i Foodbank","hours":15,"verified":true}],"monthlyIncome":313,"fplPct":24,"nearCeiling":false,"lastActive":1,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Checked member portal 1d ago","outreachTrail":[{"d":"1d ago","ch":"Phone call","r":"Delivered"},{"d":"6d ago","ch":"Email","r":"Bounced"},{"d":"13d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-532067","name":"Manoa Kahalewai","status":"At Risk","logged":51,"required":80,"remaining":29,"daysLeft":7,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Education","org":"Hawai'i Foodbank","hours":24,"verified":true},{"date":"2026-12-19","type":"Work","org":"Kupuna Care Network","hours":13,"verified":true},{"date":"2026-12-22","type":"Volunteer","org":"Remote Tutoring Collective","hours":14,"verified":true}],"monthlyIncome":358,"fplPct":27,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 10d ago","outreachTrail":[{"d":"10d ago","ch":"Mail","r":"Delivered"},{"d":"15d ago","ch":"Mail","r":"Bounced"},{"d":"22d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-413685","name":"David Bright","status":"At Risk","logged":67,"required":80,"remaining":13,"daysLeft":10,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-13","type":"Job Training","org":"Aloha United Way 211","hours":21,"verified":false},{"date":"2026-12-25","type":"Volunteer","org":"Catchafire Pro Bono","hours":18,"verified":true},{"date":"2026-12-27","type":"Work","org":"Big Island Food Pantry","hours":28,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":8,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Checked member portal 8d ago","outreachTrail":[{"d":"8d ago","ch":"Mail","r":"Delivered"},{"d":"13d ago","ch":"Mail","r":"No response"},{"d":"20d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-973294","name":"Sefo Cardenas","status":"Behind","logged":18,"required":80,"remaining":62,"daysLeft":9,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-25","type":"Work","org":"Hawaiian Humane Society","hours":18,"verified":true}],"monthlyIncome":395,"fplPct":30,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Seen at Kaua'i Community Garden 10d ago","outreachTrail":[{"d":"10d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"15d ago","ch":"Phone call","r":"Delivered"},{"d":"22d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-757937","name":"Kawika Tanaka","status":"At Risk","logged":59,"required":80,"remaining":21,"daysLeft":16,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-11","type":"Work","org":"Big Island Food Pantry","hours":8,"verified":true},{"date":"2026-12-12","type":"Volunteer","org":"Kaua'i Community Garden","hours":10,"verified":true}],"monthlyIncome":1286,"fplPct":99,"nearCeiling":false,"lastActive":4,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 4d ago","outreachTrail":[{"d":"4d ago","ch":"Mail","r":"Delivered"},{"d":"9d ago","ch":"Phone call","r":"Delivered"},{"d":"16d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-964749","name":"Kekoa Faleolo","status":"Behind","logged":18,"required":80,"remaining":62,"daysLeft":12,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-24","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":13,"verified":true},{"date":"2026-12-26","type":"Job Training","org":"Catchafire Pro Bono","hours":5,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":16,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Checked member portal 16d ago","outreachTrail":[{"d":"16d ago","ch":"Mail","r":"Delivered"},{"d":"21d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"28d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-662636","name":"Keanu Faleolo","status":"On Track","logged":103,"required":80,"remaining":0,"daysLeft":10,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-02","type":"Work","org":"Habitat for Humanity Leeward","hours":9,"verified":false},{"date":"2026-12-05","type":"Volunteer","org":"Aloha United Way 211","hours":13,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":28,"verified":true},{"date":"2026-12-20","type":"Volunteer","org":"Catchafire Pro Bono","hours":13,"verified":true},{"date":"2026-12-21","type":"Education","org":"Bookshare Transcription","hours":13,"verified":true}],"monthlyIncome":1717,"fplPct":132,"nearCeiling":true,"lastActive":10,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Checked member portal 10d ago","outreachTrail":[{"d":"10d ago","ch":"Mail","r":"Delivered"},{"d":"15d ago","ch":"Phone call","r":"Bounced"},{"d":"22d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-974190","name":"Daniel Tanaka","status":"On Track","logged":106,"required":80,"remaining":0,"daysLeft":10,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-21","type":"Job Training","org":"M\u0101lama Maui Beach Crew","hours":17,"verified":true},{"date":"2026-12-28","type":"Volunteer","org":"Kaua'i Community Garden","hours":20,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 15d ago","outreachTrail":[{"d":"15d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"20d ago","ch":"Member portal","r":"No response"},{"d":"27d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-389282","name":"Malia Kaaihue","status":"On Track","logged":87,"required":80,"remaining":0,"daysLeft":16,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-02","type":"Work","org":"Catchafire Pro Bono","hours":25,"verified":true},{"date":"2026-12-27","type":"Job Training","org":"M\u0101lama Maui Beach Crew","hours":24,"verified":true}],"monthlyIncome":1370,"fplPct":105,"nearCeiling":false,"lastActive":15,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Seen at Remote Tutoring Collective 15d ago","outreachTrail":[{"d":"15d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"20d ago","ch":"Member portal","r":"Bounced"},{"d":"27d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-952547","name":"Tiare DelaCruz","status":"Behind","logged":21,"required":80,"remaining":59,"daysLeft":6,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Job Training","org":"Aloha United Way 211","hours":21,"verified":true}],"monthlyIncome":521,"fplPct":40,"nearCeiling":false,"lastActive":5,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Seen at Kupuna Care Network 5d ago","outreachTrail":[{"d":"5d ago","ch":"Phone call","r":"Delivered"},{"d":"10d ago","ch":"Email","r":"Bounced"},{"d":"17d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-238205","name":"Keoni Kealoha","status":"Exempt","logged":0,"required":80,"remaining":0,"daysLeft":20,"island":"Hawai'i","exemptReason":"Pregnant / postpartum","activities":[],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Clinic visit logged 9d ago","outreachTrail":[{"d":"7d ago","ch":"Phone call","r":"Delivered"},{"d":"12d ago","ch":"Mail","r":"Delivered"},{"d":"19d ago","ch":"Email","r":"Delivered"}],"exemptSource":"Claims data: prenatal care","exemptConfidence":"High"},{"id":"AC-378258","name":"Leilani Santos","status":"On Track","logged":127,"required":80,"remaining":0,"daysLeft":15,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-04","type":"Volunteer","org":"Kaua'i Community Garden","hours":17,"verified":true},{"date":"2026-12-28","type":"Job Training","org":"Habitat for Humanity Leeward","hours":7,"verified":true}],"monthlyIncome":1785,"fplPct":137,"nearCeiling":true,"lastActive":12,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Seen at Kupuna Care Network 12d ago","outreachTrail":[{"d":"12d ago","ch":"Mail","r":"Delivered"},{"d":"17d ago","ch":"Mail","r":"No response"},{"d":"24d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-163780","name":"Faith Kealoha","status":"Behind","logged":25,"required":80,"remaining":55,"daysLeft":15,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-05","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":8,"verified":true},{"date":"2026-12-23","type":"Volunteer","org":"Kupuna Care Network","hours":17,"verified":true}],"monthlyIncome":856,"fplPct":66,"nearCeiling":false,"lastActive":1,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Responded via Phone call 1d ago","outreachTrail":[{"d":"1d ago","ch":"Phone call","r":"Delivered"},{"d":"6d ago","ch":"Email","r":"Bounced"},{"d":"13d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-656329","name":"John Kauwe","status":"On Track","logged":112,"required":80,"remaining":0,"daysLeft":21,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-11","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":9,"verified":true},{"date":"2026-12-16","type":"Volunteer","org":"Catchafire Pro Bono","hours":10,"verified":true},{"date":"2026-12-18","type":"Education","org":"Kupuna Care Network","hours":26,"verified":true},{"date":"2026-12-24","type":"Education","org":"Kupuna Care Network","hours":8,"verified":true},{"date":"2026-12-27","type":"Volunteer","org":"Kaua'i Community Garden","hours":13,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":3,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Responded via Phone call 3d ago","outreachTrail":[{"d":"3d ago","ch":"Phone call","r":"Delivered"},{"d":"8d ago","ch":"Mail","r":"No response"},{"d":"15d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-162894","name":"Makoa Texeira","status":"At Risk","logged":75,"required":80,"remaining":5,"daysLeft":19,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-04","type":"Job Training","org":"Kaua'i Community Garden","hours":25,"verified":true},{"date":"2026-12-04","type":"Volunteer","org":"Big Island Food Pantry","hours":21,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Catchafire Pro Bono","hours":27,"verified":true},{"date":"2026-12-26","type":"Volunteer","org":"M\u0101lama Maui Beach Crew","hours":2,"verified":true}],"monthlyIncome":1002,"fplPct":77,"nearCeiling":false,"lastActive":16,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Responded via In-person at CBO 16d ago","outreachTrail":[{"d":"16d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"21d ago","ch":"Member portal","r":"Delivered"},{"d":"28d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-743378","name":"Lia Spencer","status":"At Risk","logged":75,"required":80,"remaining":5,"daysLeft":2,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Education","org":"Hawai'i Foodbank","hours":24,"verified":true},{"date":"2026-12-12","type":"Volunteer","org":"Hawai'i Foodbank","hours":15,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Remote Tutoring Collective","hours":22,"verified":true},{"date":"2026-12-25","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":14,"verified":true}],"monthlyIncome":912,"fplPct":70,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Phone call","lastTouchpoint":"Seen at Big Island Food Pantry 7d ago","outreachTrail":[{"d":"7d ago","ch":"Phone call","r":"No response"},{"d":"12d ago","ch":"Member portal","r":"Bounced"},{"d":"19d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-265056","name":"Malia Medeiros","status":"At Risk","logged":43,"required":80,"remaining":37,"daysLeft":4,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-07","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":20,"verified":true},{"date":"2026-12-13","type":"Work","org":"Big Island Food Pantry","hours":14,"verified":false},{"date":"2026-12-22","type":"Volunteer","org":"Bookshare Transcription","hours":9,"verified":true}],"monthlyIncome":1251,"fplPct":96,"nearCeiling":false,"lastActive":3,"reach":"Reachable","lastChannel":"Phone call","lastTouchpoint":"Responded via Phone call 3d ago","outreachTrail":[{"d":"3d ago","ch":"Phone call","r":"Delivered"},{"d":"8d ago","ch":"Email","r":"No response"},{"d":"15d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-416061","name":"Keanu DelaCruz","status":"Behind","logged":8,"required":80,"remaining":72,"daysLeft":10,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-13","type":"Volunteer","org":"M\u0101lama Maui Beach Crew","hours":8,"verified":false}],"monthlyIncome":724,"fplPct":56,"nearCeiling":false,"lastActive":9,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 9d ago","outreachTrail":[{"d":"9d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"14d ago","ch":"Email","r":"Bounced"},{"d":"21d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-973835","name":"Roberto Texeira","status":"At Risk","logged":62,"required":80,"remaining":18,"daysLeft":4,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-10","type":"Work","org":"M\u0101lama Maui Beach Crew","hours":28,"verified":true},{"date":"2026-12-20","type":"Volunteer","org":"Kupuna Care Network","hours":14,"verified":false},{"date":"2026-12-28","type":"Volunteer","org":"Kaua'i Community Garden","hours":20,"verified":true}],"monthlyIncome":722,"fplPct":55,"nearCeiling":false,"lastActive":8,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Clinic visit logged 10d ago","outreachTrail":[{"d":"8d ago","ch":"In-person at CBO","r":"No response"},{"d":"13d ago","ch":"In-person at CBO","r":"Bounced"},{"d":"20d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-192410","name":"Makana Park","status":"On Track","logged":86,"required":80,"remaining":0,"daysLeft":9,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Volunteer","org":"Catchafire Pro Bono","hours":10,"verified":true},{"date":"2026-12-21","type":"Volunteer","org":"M\u0101lama Maui Beach Crew","hours":11,"verified":false},{"date":"2026-12-24","type":"Work","org":"Big Island Food Pantry","hours":18,"verified":true},{"date":"2026-12-25","type":"Work","org":"Big Island Food Pantry","hours":26,"verified":false},{"date":"2026-12-27","type":"Education","org":"Kupuna Care Network","hours":17,"verified":true}],"monthlyIncome":1711,"fplPct":131,"nearCeiling":true,"lastActive":1,"reach":"Reachable","lastChannel":"Mobile (SMS)","lastTouchpoint":"Checked member portal 1d ago","outreachTrail":[{"d":"1d ago","ch":"Mobile (SMS)","r":"Delivered"},{"d":"6d ago","ch":"Mail","r":"No response"},{"d":"13d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-896788","name":"Faith Lindsey","status":"At Risk","logged":76,"required":80,"remaining":4,"daysLeft":21,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":17,"verified":true},{"date":"2026-12-10","type":"Work","org":"Aloha United Way 211","hours":17,"verified":true},{"date":"2026-12-19","type":"Work","org":"Catchafire Pro Bono","hours":22,"verified":true},{"date":"2026-12-21","type":"Volunteer","org":"Catchafire Pro Bono","hours":8,"verified":true}],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":2,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Seen at Habitat for Humanity Leeward 2d ago","outreachTrail":[{"d":"2d ago","ch":"Email","r":"No response"},{"d":"7d ago","ch":"Mail","r":"Bounced"},{"d":"14d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-783501","name":"Joseph Lindsey","status":"On Track","logged":118,"required":80,"remaining":0,"daysLeft":17,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Hawai'i Foodbank","hours":16,"verified":true},{"date":"2026-12-15","type":"Volunteer","org":"Bookshare Transcription","hours":28,"verified":true},{"date":"2026-12-25","type":"Volunteer","org":"Bookshare Transcription","hours":15,"verified":true}],"monthlyIncome":1206,"fplPct":92,"nearCeiling":false,"lastActive":12,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 12d ago","outreachTrail":[{"d":"12d ago","ch":"In-person at CBO","r":"No response"},{"d":"17d ago","ch":"Phone call","r":"Delivered"},{"d":"24d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-154909","name":"Nalani Kauwe","status":"At Risk","logged":61,"required":80,"remaining":19,"daysLeft":4,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-10","type":"Volunteer","org":"Aloha United Way 211","hours":7,"verified":true},{"date":"2026-12-12","type":"Volunteer","org":"Remote Tutoring Collective","hours":27,"verified":false},{"date":"2026-12-20","type":"Volunteer","org":"Kupuna Care Network","hours":27,"verified":true}],"monthlyIncome":870,"fplPct":67,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Clinic visit logged 9d ago","outreachTrail":[{"d":"7d ago","ch":"Mail","r":"Delivered"},{"d":"12d ago","ch":"Phone call","r":"Bounced"},{"d":"19d ago","ch":"Member portal","r":"Delivered"}]},{"id":"AC-952686","name":"Healani Wong","status":"On Track","logged":124,"required":80,"remaining":0,"daysLeft":18,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-05","type":"Job Training","org":"Hawaiian Humane Society","hours":21,"verified":true},{"date":"2026-12-06","type":"Work","org":"Catchafire Pro Bono","hours":6,"verified":true}],"monthlyIncome":352,"fplPct":27,"nearCeiling":false,"lastActive":8,"reach":"Hard to reach","lastChannel":"In-person at CBO","lastTouchpoint":"Checked member portal 8d ago","outreachTrail":[{"d":"8d ago","ch":"In-person at CBO","r":"Delivered"},{"d":"13d ago","ch":"Member portal","r":"Bounced"},{"d":"20d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-985447","name":"Koa Latu","status":"At Risk","logged":72,"required":80,"remaining":8,"daysLeft":19,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-13","type":"Education","org":"Catchafire Pro Bono","hours":25,"verified":false},{"date":"2026-12-26","type":"Volunteer","org":"Remote Tutoring Collective","hours":28,"verified":true}],"monthlyIncome":411,"fplPct":32,"nearCeiling":false,"lastActive":0,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Seen at Keiki Literacy (Virtual) 0d ago","outreachTrail":[{"d":"0d ago","ch":"Email","r":"Delivered"},{"d":"5d ago","ch":"Mail","r":"Delivered"},{"d":"12d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-145814","name":"Palani Maile","status":"On Track","logged":123,"required":80,"remaining":0,"daysLeft":9,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-02","type":"Education","org":"Remote Tutoring Collective","hours":10,"verified":true},{"date":"2026-12-08","type":"Work","org":"Big Island Food Pantry","hours":20,"verified":true},{"date":"2026-12-14","type":"Work","org":"Habitat for Humanity Leeward","hours":18,"verified":true},{"date":"2026-12-19","type":"Education","org":"Aloha United Way 211","hours":12,"verified":true},{"date":"2026-12-23","type":"Education","org":"Catchafire Pro Bono","hours":23,"verified":true}],"monthlyIncome":1685,"fplPct":129,"nearCeiling":true,"lastActive":3,"reach":"Reachable","lastChannel":"Email","lastTouchpoint":"Clinic visit logged 5d ago","outreachTrail":[{"d":"3d ago","ch":"Email","r":"Delivered"},{"d":"8d ago","ch":"Phone call","r":"Delivered"},{"d":"15d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-900185","name":"Maile Nakamura","status":"On Track","logged":108,"required":80,"remaining":0,"daysLeft":18,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-12","type":"Job Training","org":"Keiki Literacy (Virtual)","hours":13,"verified":true},{"date":"2026-12-13","type":"Volunteer","org":"Hawai'i Foodbank","hours":22,"verified":true},{"date":"2026-12-27","type":"Volunteer","org":"Kupuna Care Network","hours":16,"verified":true}],"monthlyIncome":1472,"fplPct":113,"nearCeiling":false,"lastActive":11,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Checked member portal 11d ago","outreachTrail":[{"d":"11d ago","ch":"Mail","r":"Delivered"},{"d":"16d ago","ch":"Phone call","r":"Delivered"},{"d":"23d ago","ch":"Phone call","r":"Delivered"}]},{"id":"AC-140163","name":"Alana Cabral","status":"On Track","logged":133,"required":80,"remaining":0,"daysLeft":17,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-01","type":"Volunteer","org":"Kaua'i Community Garden","hours":6,"verified":true},{"date":"2026-12-04","type":"Volunteer","org":"Bookshare Transcription","hours":15,"verified":true},{"date":"2026-12-20","type":"Education","org":"Aloha United Way 211","hours":23,"verified":true}],"monthlyIncome":740,"fplPct":57,"nearCeiling":false,"lastActive":8,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Responded via Mail 8d ago","outreachTrail":[{"d":"8d ago","ch":"Mail","r":"Delivered"},{"d":"13d ago","ch":"Email","r":"Bounced"},{"d":"20d ago","ch":"In-person at CBO","r":"Delivered"}]},{"id":"AC-769989","name":"Manoa Naki","status":"At Risk","logged":69,"required":80,"remaining":11,"daysLeft":4,"island":"Maui","exemptReason":null,"activities":[{"date":"2026-12-05","type":"Work","org":"Habitat for Humanity Leeward","hours":24,"verified":true},{"date":"2026-12-14","type":"Volunteer","org":"Aloha United Way 211","hours":17,"verified":true}],"monthlyIncome":1576,"fplPct":121,"nearCeiling":false,"lastActive":6,"reach":"Limited","lastChannel":"Mail","lastTouchpoint":"Seen at Kupuna Care Network 6d ago","outreachTrail":[{"d":"6d ago","ch":"Mail","r":"Delivered"},{"d":"11d ago","ch":"In-person at CBO","r":"Bounced"},{"d":"18d ago","ch":"Mobile (SMS)","r":"Delivered"}]},{"id":"AC-648913","name":"Keoni Nakamura","status":"Behind","logged":4,"required":80,"remaining":76,"daysLeft":18,"island":"O'ahu","exemptReason":null,"activities":[{"date":"2026-12-09","type":"Volunteer","org":"Keiki Literacy (Virtual)","hours":4,"verified":true}],"monthlyIncome":1788,"fplPct":137,"nearCeiling":true,"lastActive":1,"reach":"Reachable","lastChannel":"Mobile (SMS)","lastTouchpoint":"Responded via Mobile (SMS) 1d ago","outreachTrail":[{"d":"1d ago","ch":"Mobile (SMS)","r":"No response"},{"d":"6d ago","ch":"Mobile (SMS)","r":"No response"},{"d":"13d ago","ch":"Mail","r":"Delivered"}]},{"id":"AC-461551","name":"David Kamaka","status":"On Track","logged":122,"required":80,"remaining":0,"daysLeft":5,"island":"Kaua'i","exemptReason":null,"activities":[{"date":"2026-12-06","type":"Volunteer","org":"Remote Tutoring Collective","hours":16,"verified":true},{"date":"2026-12-07","type":"Work","org":"Remote Tutoring Collective","hours":20,"verified":false},{"date":"2026-12-17","type":"Education","org":"Hawai'i Foodbank","hours":16,"verified":true},{"date":"2026-12-26","type":"Job Training","org":"Catchafire Pro Bono","hours":21,"verified":true}],"monthlyIncome":1770,"fplPct":136,"nearCeiling":true,"lastActive":2,"reach":"Reachable","lastChannel":"Mobile (SMS)","lastTouchpoint":"Seen at Kupuna Care Network 2d ago","outreachTrail":[{"d":"2d ago","ch":"Mobile (SMS)","r":"Delivered"},{"d":"7d ago","ch":"Email","r":"No response"},{"d":"14d ago","ch":"Email","r":"Delivered"}]},{"id":"AC-365618","name":"Junior Place","status":"Exempt","logged":0,"required":80,"remaining":0,"daysLeft":8,"island":"Hawai'i","exemptReason":"SNAP work-compliant","activities":[],"monthlyIncome":0,"fplPct":0,"nearCeiling":false,"lastActive":10,"reach":"Hard to reach","lastChannel":"Mail","lastTouchpoint":"Seen at M\u0101lama Maui Beach Crew 10d ago","outreachTrail":[{"d":"10d ago","ch":"Mail","r":"Delivered"},{"d":"15d ago","ch":"In-person at CBO","r":"Bounced"},{"d":"22d ago","ch":"In-person at CBO","r":"Delivered"}],"exemptSource":"State SNAP data match","exemptConfidence":"High"},{"id":"AC-787584","name":"David Akana","status":"On Track","logged":87,"required":80,"remaining":0,"daysLeft":13,"island":"Hawai'i","exemptReason":null,"activities":[{"date":"2026-12-03","type":"Volunteer","org":"Habitat for Humanity Leeward","hours":22,"verified":true},{"date":"2026-12-06","type":"Education","org":"Keiki Literacy (Virtual)","hours":18,"verified":true},{"date":"2026-12-06","type":"Volunteer","org":"Kaua'i Community Garden","hours":25,"verified":true},{"date":"2026-12-10","type":"Volunteer","org":"Bookshare Transcription","hours":8,"verified":true},{"date":"2026-12-15","type":"Work","org":"Aloha United Way 211","hours":14,"verified":false}],"monthlyIncome":578,"fplPct":44,"nearCeiling":false,"lastActive":7,"reach":"Limited","lastChannel":"Email","lastTouchpoint":"Responded via Email 7d ago","outreachTrail":[{"d":"7d ago","ch":"Email","r":"Delivered"},{"d":"12d ago","ch":"Member portal","r":"Delivered"},{"d":"19d ago","ch":"Mobile (SMS)","r":"Delivered"}]}],"organizations":[{"name":"Hawai'i Foodbank","type":"In-person","category":"Food Security","capacity":40,"island":"O'ahu","verifyRate":93,"placed":283,"status":"Certified"},{"name":"Kupuna Care Network","type":"In-person","category":"Senior Support","capacity":25,"island":"O'ahu","verifyRate":93,"placed":305,"status":"Certified"},{"name":"Remote Tutoring Collective","type":"Remote","category":"Education","capacity":120,"island":"Statewide","verifyRate":95,"placed":142,"status":"Certified"},{"name":"Hawaiian Humane Society","type":"In-person","category":"Animal Welfare","capacity":30,"island":"O'ahu","verifyRate":88,"placed":307,"status":"In Review"},{"name":"Aloha United Way 211","type":"Remote","category":"Crisis Support","capacity":60,"island":"Statewide","verifyRate":93,"placed":140,"status":"Certified"},{"name":"M\u0101lama Maui Beach Crew","type":"In-person","category":"Environment","capacity":35,"island":"Maui","verifyRate":87,"placed":273,"status":"In Review"},{"name":"Keiki Literacy (Virtual)","type":"Remote","category":"Education","capacity":80,"island":"Statewide","verifyRate":90,"placed":117,"status":"Certified"},{"name":"Habitat for Humanity Leeward","type":"In-person","category":"Housing","capacity":20,"island":"O'ahu","verifyRate":87,"placed":320,"status":"In Review"},{"name":"Bookshare Transcription","type":"Remote","category":"Skill-based","capacity":100,"island":"Statewide","verifyRate":97,"placed":66,"status":"Certified"},{"name":"Big Island Food Pantry","type":"In-person","category":"Food Security","capacity":22,"island":"Hawai'i","verifyRate":95,"placed":247,"status":"Certified"},{"name":"Catchafire Pro Bono","type":"Remote","category":"Skill-based","capacity":150,"island":"Statewide","verifyRate":93,"placed":125,"status":"Certified"},{"name":"Kaua'i Community Garden","type":"In-person","category":"Environment","capacity":18,"island":"Kaua'i","verifyRate":95,"placed":52,"status":"Certified"}],"summary":{"total":78,"onTrack":33,"atRisk":20,"behind":22,"exempt":3},"islands":[{"island":"O'ahu","compliant":67,"atRisk":20,"behind":13},{"island":"Maui","compliant":61,"atRisk":24,"behind":15},{"island":"Hawai'i","compliant":54,"atRisk":27,"behind":19},{"island":"Kaua'i","compliant":69,"atRisk":18,"behind":13},{"island":"Moloka'i","compliant":43,"atRisk":31,"behind":26}],"pathways":[{"label":"Volunteer","pct":58},{"label":"Employment","pct":22},{"label":"Education","pct":12},{"label":"Unassigned","pct":8}],"reporting":{"docsGenerated":2741,"submitted":2684,"pendingReview":57,"rejected":0,"pipeline":[{"step":1,"name":"CBO Hour Verification","desc":"Partner organizations confirm attendance and log verified hours in real time","status":"Complete"},{"step":2,"name":"Documentation Generation","desc":"State-format community engagement verification package generated per member, per cycle","status":"Complete"},{"step":3,"name":"MCO Dashboard Sync","desc":"AlohaCare care management sees current compliance status for every member","status":"Complete"},{"step":4,"name":"State Submission","desc":"Verification packages batched and submitted to Med-QUEST Division","status":"In Progress"},{"step":5,"name":"State Confirmation","desc":"Awaiting Med-QUEST acknowledgment for 57 submitted packages","status":"Pending"}]},"exemptions":{"identified":9240,"categories":[{"label":"Caregiver of dependent <13","count":3120,"source":"Claims: dependent on plan"},{"label":"Medically frail / disabled","count":2480,"source":"Diagnosis codes on claims"},{"label":"SNAP work-requirement compliant","count":1690,"source":"State SNAP data match"},{"label":"Pregnant / postpartum","count":880,"source":"Prenatal claims data"},{"label":"Veteran (total disability)","count":410,"source":"VA enrollment match"},{"label":"Former foster care (under 26)","count":360,"source":"State eligibility category"},{"label":"American Indian / Alaska Native","count":300,"source":"Tribal enrollment"}],"needsReview":540,"autoCleared":8700,"reviewedPopulation":27800,"subjectAfter":18560}};

const C = {
  ink: "#10241f",
  paper: "#f7f5f0",
  card: "#ffffff",
  line: "#e3e0d8",
  teal: "#0d5c54",
  tealDk: "#08423c",
  sand: "#c9a85f",
  green: "#2f8f6b",
  amber: "#c98a2b",
  red: "#b8492f",
  slate: "#5b6b66",
  slateLt: "#8a978f",
};

const statusColor = (s) =>
  s === "On Track" ? C.green : s === "At Risk" ? C.amber : s === "Behind" ? C.red : C.slateLt;
const statusBg = (s) =>
  s === "On Track" ? "#e8f3ee" : s === "At Risk" ? "#faf1e0" : s === "Behind" ? "#f7e6e1" : "#eef0ee";

const F_DISPLAY = "'Fraunces', Georgia, serif";
const F_BODY = "'Public Sans', -apple-system, sans-serif";

export default function App() {
  const [screen, setScreen] = useState("dashboard");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("remaining");
  const [query, setQuery] = useState("");

  const members = DATA.members;
  const sum = DATA.summary;

  const filtered = useMemo(() => {
    let m = members.filter((x) =>
      filter === "All" ? true : filter === "Needs Outreach"
        ? (x.status === "At Risk" || x.status === "Behind")
        : x.status === filter
    );
    if (query) m = m.filter((x) => x.name.toLowerCase().includes(query.toLowerCase()) || x.id.toLowerCase().includes(query.toLowerCase()));
    m = [...m].sort((a, b) =>
      sort === "remaining" ? b.remaining - a.remaining
      : sort === "days" ? a.daysLeft - b.daysLeft
      : a.name.localeCompare(b.name)
    );
    return m;
  }, [members, filter, sort, query]);

  const openMember = (m) => { setSelected(m); setScreen("member"); };

  return (
    <div style={{ fontFamily: F_BODY, background: C.paper, color: C.ink, minHeight: "100vh", letterSpacing: "-0.01em" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Public+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 9px; height: 9px; }
        ::-webkit-scrollbar-thumb { background: #d6d2c8; border-radius: 9px; }
        .row-hover:hover { background: #faf9f5 !important; cursor: pointer; }
        .nav-btn { transition: all .15s ease; }
        .nav-btn:hover { color: ${C.sand} !important; }
        @keyframes fade { from { opacity:0; transform: translateY(6px);} to {opacity:1; transform:none;} }
        @keyframes rise { from { opacity:0; transform: translateY(14px);} to {opacity:1; transform:none;} }
        .stagger > * { opacity:0; animation: rise .5s cubic-bezier(.2,.8,.2,1) forwards; }
        .stagger > *:nth-child(1){ animation-delay:.05s; }
        .stagger > *:nth-child(2){ animation-delay:.13s; }
        .stagger > *:nth-child(3){ animation-delay:.21s; }
        .stagger > *:nth-child(4){ animation-delay:.29s; }
        .stagger > *:nth-child(5){ animation-delay:.37s; }
        .stagger > *:nth-child(6){ animation-delay:.45s; }
        .fade { animation: fade .35s ease both; }
        .bar-fill { transition: width .6s cubic-bezier(.2,.8,.2,1); }
      `}</style>

      <div style={{ background: C.tealDk, color: "#fff", padding: "0 28px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: C.sand, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F_DISPLAY, fontWeight: 600, color: C.tealDk, fontSize: 18 }}>C</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 500, letterSpacing: "0.01em" }}>Calena Network</div>
            <div style={{ fontSize: 10.5, opacity: 0.55, letterSpacing: ".06em", textTransform: "uppercase", marginTop: 2 }}>Engagement Console</div>
          </div>
          <div style={{ fontSize: 11, opacity: .6, marginLeft: 8, border: "1px solid rgba(255,255,255,.25)", padding: "2px 7px", borderRadius: 20, letterSpacing: ".05em" }}>DEMO · SAMPLE DATA</div>
        </div>
        <div style={{ display: "flex", gap: 26, fontSize: 14, alignItems: "center" }}>
          {[["dashboard","Dashboard"],["network","Engagement Network"],["exemptions","Exemptions"],["analytics","Analytics"],["report","Monthly Report"],["reporting","State Reporting"]].map(([k,l]) => (
            <span key={k} className="nav-btn" onClick={() => { setScreen(k); setSelected(null); }}
              style={{ cursor: "pointer", fontWeight: screen===k?700:400, color: screen===k?"#fff":"rgba(255,255,255,.7)", borderBottom: screen===k?`2px solid ${C.sand}`:"2px solid transparent", paddingBottom: 4 }}>{l}</span>
          ))}
          <div style={{ marginLeft: 10, fontSize: 13, opacity: .8, display:"flex", alignItems:"center", gap:8 }}>
            <div style={{width:26,height:26,borderRadius:"50%",background:C.teal,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700}}>AC</div>
            AlohaCare
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 28px 60px" }}>
        {screen === "dashboard" && <Dashboard sum={sum} members={members} filtered={filtered} filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} query={query} setQuery={setQuery} openMember={openMember} setScreen={setScreen} />}
        {screen === "member" && selected && <MemberDetail m={selected} orgs={DATA.organizations} back={() => setScreen("dashboard")} openApp={() => setScreen("memberapp")} />}
        {screen === "memberapp" && selected && <MemberApp m={selected} orgs={DATA.organizations} back={() => setScreen("member")} />}
        {screen === "batchmatch" && <BatchMatch members={members} orgs={DATA.organizations} back={() => setScreen("dashboard")} openMember={openMember} />}
        {screen === "report" && <ReportView members={members} sum={sum} />}
        {screen === "network" && <NetworkView orgs={DATA.organizations} />}
        {screen === "analytics" && <AnalyticsView islands={DATA.islands} pathways={DATA.pathways} members={members} openMember={openMember} />}
        {screen === "exemptions" && <ExemptionsView ex={DATA.exemptions} members={members} openMember={openMember} />}
        {screen === "reporting" && <ReportingView r={DATA.reporting} />}
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, color, big }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "18px 20px", flex: 1, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: color || C.teal }} />
      <div style={{ fontSize: 12.5, color: C.slate, fontWeight: 600, letterSpacing: ".03em", textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontFamily: F_DISPLAY, fontSize: big ? 40 : 34, fontWeight: 500, marginTop: 6, color: color || C.ink, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 13, color: C.slateLt, marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

function Dashboard({ sum, members, filtered, filter, setFilter, sort, setSort, query, setQuery, openMember, setScreen }) {
  const pctOnTrack = Math.round((sum.onTrack / sum.total) * 100);
  const atRiskUrgent = members.filter(m => (m.status === "At Risk" || m.status === "Behind") && m.daysLeft <= 9).length;
  return (
    <div className="fade stagger">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Community Engagement · HR1</div>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 34, fontWeight: 500, margin: "6px 0 0" }}>Member Compliance Overview</h1>
          <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Reporting period: December 2026 · Lookback active</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: F_DISPLAY, fontSize: 46, fontWeight: 500, color: C.teal, lineHeight: 1 }}>{pctOnTrack}%</div>
          <div style={{ fontSize: 13, color: C.slate }}>of members on track</div>
        </div>
      </div>

      <div style={{ fontSize: 14.5, color: C.slate, lineHeight: 1.5, maxWidth: 720, marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${C.line}` }}>
        One operational view of every AlohaCare member subject to the H.R. 1 community engagement requirement. It tracks verified hours, surfaces who needs help, and connects them to the volunteer and work opportunities that keep their coverage.
      </div>

      <div style={{ background: "linear-gradient(90deg, #faf1e8, #fdf9f3)", border: `1px solid #ecd9b0`, borderRadius: 14, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f7ead2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚠</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>{atRiskUrgent} members at risk of losing coverage this cycle</div>
            <div style={{ fontSize: 13, color: C.slate, marginTop: 2 }}>Below required hours with limited days remaining · matched opportunities ready to assign</div>
          </div>
        </div>
        <button onClick={() => setScreen("batchmatch")} style={{ background: C.teal, color: "#fff", border: "none", padding: "10px 20px", borderRadius: 22, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: F_BODY, letterSpacing: ".02em" }}>Match &amp; resolve →</button>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 26 }}>
        <StatCard label="Total Applicable" value={sum.total.toLocaleString()} sub="subject to requirement" color={C.teal} big />
        <StatCard label="On Track" value={sum.onTrack} sub="≥ 80 hrs logged" color={C.green} />
        <StatCard label="At Risk" value={sum.atRisk} sub="40–79 hrs logged" color={C.amber} />
        <StatCard label="Behind" value={sum.behind} sub="< 40 hrs logged" color={C.red} />
        <StatCard label="Exempt" value={sum.exempt} sub="excluded / exception" color={C.slateLt} />
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "16px 20px", marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.slate, marginBottom: 10, fontWeight: 600 }}>
          <span>Portfolio compliance distribution</span><span>{sum.total} members</span>
        </div>
        <div style={{ display: "flex", height: 14, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.line}` }}>
          <div className="bar-fill" style={{ width: `${(sum.onTrack/sum.total)*100}%`, background: C.green }} />
          <div className="bar-fill" style={{ width: `${(sum.atRisk/sum.total)*100}%`, background: C.amber }} />
          <div className="bar-fill" style={{ width: `${(sum.behind/sum.total)*100}%`, background: C.red }} />
          <div className="bar-fill" style={{ width: `${(sum.exempt/sum.total)*100}%`, background: C.slateLt }} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
        {["All", "Needs Outreach", "On Track", "At Risk", "Behind"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{
            border: `1px solid ${filter===f?C.teal:C.line}`, background: filter===f?C.teal:C.card, color: filter===f?"#fff":C.slate,
            padding: "7px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: F_BODY,
            transition: "all .15s" }}>{f}{f==="Needs Outreach" && ` · ${members.filter(m=>m.status==="At Risk"||m.status==="Behind").length}`}</button>
        ))}
        <div style={{ flex: 1 }} />
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search member or ID…" style={{
          border: `1px solid ${C.line}`, borderRadius: 20, padding: "8px 14px", fontSize: 13, fontFamily: F_BODY, width: 200, outline: "none", background: C.card }} />
        <select value={sort} onChange={(e)=>setSort(e.target.value)} style={{
          border: `1px solid ${C.line}`, borderRadius: 20, padding: "8px 12px", fontSize: 13, fontFamily: F_BODY, background: C.card, color: C.slate, cursor: "pointer" }}>
          <option value="remaining">Sort: Hours remaining</option>
          <option value="days">Sort: Days left</option>
          <option value="name">Sort: Name</option>
        </select>
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#faf9f5", borderBottom: `1px solid ${C.line}` }}>
              {["Member", "Member ID", "Status", "Hours logged", "To 80 hrs", "Days left", "Island"].map((h) => (
                <th key={h} style={{ textAlign: h==="Member"||h==="Member ID"||h==="Island"?"left":"center", padding: "13px 16px", fontSize: 11.5, color: C.slate, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="row-hover" onClick={() => openMember(m)} style={{ borderBottom: `1px solid #f0eee7` }}>
                <td style={{ padding: "13px 16px", fontWeight: 600 }}>{m.name}</td>
                <td style={{ padding: "13px 16px", color: C.slate, fontVariantNumeric: "tabular-nums" }}>{m.id}</td>
                <td style={{ padding: "13px 16px", textAlign: "center" }}>
                  <span style={{ background: statusBg(m.status), color: statusColor(m.status), padding: "4px 11px", borderRadius: 20, fontSize: 12.5, fontWeight: 700 }}>{m.status}</span>
                </td>
                <td style={{ padding: "13px 16px", textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
                    <div style={{ width: 70, height: 6, background: "#eee", borderRadius: 6, overflow: "hidden" }}>
                      <div style={{ width: `${Math.min(100,(m.logged/80)*100)}%`, height: "100%", background: statusColor(m.status) }} />
                    </div>
                    <span style={{ fontWeight: 600, minWidth: 28 }}>{m.logged}</span>
                  </div>
                </td>
                <td style={{ padding: "13px 16px", textAlign: "center", fontVariantNumeric: "tabular-nums", color: m.status==="Exempt"?C.slateLt:C.ink, fontWeight: m.remaining>0?700:400 }}>{m.status==="Exempt"?"–":m.remaining>0?m.remaining:"✓"}</td>
                <td style={{ padding: "13px 16px", textAlign: "center", fontVariantNumeric: "tabular-nums", color: m.daysLeft<=5?C.red:C.slate, fontWeight: m.daysLeft<=5?700:400 }}>{m.status==="Exempt"?"–":m.daysLeft}</td>
                <td style={{ padding: "13px 16px", color: C.slate }}>{m.island}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 12, textAlign: "center" }}>Showing {filtered.length} of {members.length} members · Click any row for member detail</div>
    </div>
  );
}

function MemberDetail({ m, orgs, back, openApp }) {
  const verified = m.activities.filter(a=>a.verified).reduce((s,a)=>s+a.hours,0);
  const pending = m.activities.filter(a=>!a.verified).reduce((s,a)=>s+a.hours,0);
  const byType = {};
  m.activities.forEach(a => { byType[a.type] = (byType[a.type]||0)+a.hours; });

  const usedOrgs = new Set(m.activities.map(a=>a.org));
  const matches = (orgs||[])
    .filter(o => !usedOrgs.has(o.name))
    .map(o => {
      let score = 0; const reasons = [];
      if (o.type === "Remote") { score += 3; reasons.push("Remote · fits around work hours"); }
      if (o.island === m.island) { score += 2; reasons.push(`On ${m.island}`); }
      if (o.island === "Statewide") { score += 2; reasons.push("Available statewide"); }
      if (o.capacity >= 40) { score += 1; reasons.push("Open capacity"); }
      return { ...o, score, reason: reasons[0] || "Available now" };
    })
    .sort((a,b) => b.score - a.score)
    .slice(0, 3);

  const needsAction = m.status === "At Risk" || m.status === "Behind";

  return (
    <div className="fade">
      <button onClick={back} style={{ background: "none", border: "none", color: C.teal, fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: F_BODY, marginBottom: 18, padding: 0 }}>← Back to overview</button>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 26 }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: C.teal, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F_DISPLAY, fontSize: 26, fontWeight: 500 }}>{m.name.split(" ").map(x=>x[0]).join("")}</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 30, fontWeight: 500, margin: 0 }}>{m.name}</h1>
          <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>{m.id} · {m.island} · QUEST Integration</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
          <span style={{ background: statusBg(m.status), color: statusColor(m.status), padding: "8px 18px", borderRadius: 24, fontSize: 15, fontWeight: 700 }}>{m.status}</span>
          <button onClick={openApp} style={{ background: "#fff", border: `1px solid ${C.line}`, color: C.teal, padding: "7px 14px", borderRadius: 20, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: F_BODY, whiteSpace: "nowrap" }}>📱 View member app</button>
        </div>
      </div>

      {m.status === "Exempt" ? (
        <div style={{ background: "#eef0ee", border: `1px solid ${C.line}`, borderRadius: 14, padding: 24, fontSize: 15, color: C.slate }}>
          <strong style={{color:C.ink}}>Exempt from community engagement requirement.</strong><br/>Basis: {m.exemptReason}. No hours required for this period. System continues to monitor for status changes.
        </div>
      ) : (
        <>
          <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
            <StatCard label="Hours Logged" value={`${m.logged}/80`} sub={`${m.remaining>0?m.remaining+" hrs to compliance":"requirement met"}`} color={statusColor(m.status)} />
            <StatCard label="Verified" value={verified} sub="confirmed by orgs" color={C.green} />
            <StatCard label="Pending" value={pending} sub="awaiting verification" color={C.amber} />
            <StatCard label="Days Left" value={m.daysLeft} sub="in reporting period" color={m.daysLeft<=5?C.red:C.slate} />
          </div>

          <div style={{ background: m.nearCeiling ? "#fdf6ec" : C.card, border: `1px solid ${m.nearCeiling ? "#ecd9b0" : C.line}`, borderRadius: 14, padding: "18px 20px", marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: m.nearCeiling ? 12 : 0 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: C.ink }}>Eligibility Income Position</div>
                <div style={{ fontSize: 13, color: C.slate, marginTop: 2 }}>Earned income relative to the 138% FPL Medicaid ceiling (~$1,800/mo)</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 24, fontWeight: 500, color: m.nearCeiling ? C.amber : C.ink }}>{m.fplPct}% <span style={{ fontSize: 13, color: C.slateLt, fontWeight: 400 }}>FPL</span></div>
                <div style={{ fontSize: 12.5, color: C.slate }}>${m.monthlyIncome.toLocaleString()}/mo earned</div>
              </div>
            </div>
            <div style={{ position: "relative", height: 8, background: "#eee", borderRadius: 6, marginTop: 14, overflow: "visible" }}>
              <div className="bar-fill" style={{ width: `${Math.min(100, m.fplPct/138*100)}%`, height: "100%", background: m.nearCeiling ? C.amber : C.green, borderRadius: 6 }} />
              <div style={{ position: "absolute", left: "100%", top: -4, transform: "translateX(-50%)", width: 2, height: 16, background: C.red }} />
              <div style={{ position: "absolute", left: "100%", top: 18, transform: "translateX(-50%)", fontSize: 10.5, color: C.red, whiteSpace: "nowrap" }}>138% ceiling</div>
            </div>
            {m.nearCeiling && (
              <div style={{ marginTop: 22, fontSize: 13, color: C.slate, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10, padding: "12px 14px" }}>
                <strong style={{ color: C.ink }}>Balance recommendation:</strong> {m.name.split(" ")[0]} is close to the income ceiling. Additional paid hours risk exceeding Medicaid eligibility. Recommend meeting remaining requirement through <strong>volunteer or education hours</strong> rather than added work.
              </div>
            )}
          </div>

          <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "18px 20px", marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: C.ink }}>Contact &amp; Reachability</div>
              <span style={{ background: m.reach==="Reachable"?"#e8f3ee":m.reach==="Limited"?"#faf1e0":"#f7e6e1", color: m.reach==="Reachable"?C.green:m.reach==="Limited"?C.amber:C.red, padding: "4px 12px", borderRadius: 16, fontSize: 12, fontWeight: 700 }}>{m.reach}</span>
            </div>
            <div style={{ display: "flex", gap: 28, marginBottom: 14, flexWrap: "wrap" }}>
              <div><div style={{ fontSize: 11, color: C.slateLt, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 4 }}>Last Contact</div><div style={{ fontSize: 14, fontWeight: 600 }}>{m.lastActive===0?"Today":`${m.lastActive} days ago`}</div></div>
              <div><div style={{ fontSize: 11, color: C.slateLt, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 4 }}>Last Channel</div><div style={{ fontSize: 14, fontWeight: 600 }}>{m.lastChannel}</div></div>
              <div style={{ flex: 1, minWidth: 200 }}><div style={{ fontSize: 11, color: C.slateLt, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 4 }}>Last Verified Touchpoint</div><div style={{ fontSize: 14, fontWeight: 600 }}>{m.lastTouchpoint}</div></div>
            </div>
            <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
              <div style={{ fontSize: 11, color: C.slateLt, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 8 }}>Outreach Trail</div>
              {m.outreachTrail.map((o,i)=>(
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: C.slate, padding: "4px 0" }}>
                  <span style={{ width: 60, color: C.slateLt, fontVariantNumeric: "tabular-nums" }}>{o.d}</span>
                  <span style={{ flex: 1 }}>{o.ch}</span>
                  <span style={{ color: o.r==="Delivered"?C.green:o.r==="Bounced"?C.red:C.amber, fontWeight: 600 }}>{o.r}</span>
                </div>
              ))}
            </div>
            {m.reach==="Hard to reach" && (
              <div style={{ marginTop: 14, fontSize: 13, color: C.slate, background: "#fdf6ec", border: `1px solid #ecd9b0`, borderRadius: 10, padding: "12px 14px" }}>
                <strong style={{ color: C.ink }}>Re-engagement path:</strong> Standard channels unreliable. The system will surface {m.name.split(" ")[0]} for re-engagement at any participating organization touchpoint, closing the gap even when phone and mail fail.
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            {Object.entries(byType).map(([t,h]) => (
              <div key={t} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, padding: "10px 16px", fontSize: 13 }}>
                <span style={{ color: C.slate, fontWeight: 600 }}>{t}</span> <span style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600, marginLeft: 6 }}>{h}h</span>
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div style={{ fontSize: 12.5, color: C.slateLt, alignSelf: "center", fontStyle: "italic" }}>Combination of activities counts toward the 80-hour requirement</div>
          </div>

          {needsAction && (
            <div style={{ background: "#fbf7ee", border: `1px solid ${C.sand}`, borderRadius: 14, padding: "18px 20px", marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>Recommended Opportunities to Close the Gap</div>
                  <div style={{ fontSize: 13, color: C.slate, marginTop: 2 }}>{m.remaining} hrs needed · matched to {m.name.split(" ")[0]}'s location and schedule</div>
                </div>
                <span style={{ background: "#fff", border: `1px solid ${C.sand}`, color: C.sand, padding: "4px 11px", borderRadius: 20, fontSize: 11.5, fontWeight: 700, letterSpacing: ".03em" }}>PREVIEW</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {matches.map((o,i) => (
                  <div key={i} style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 11, padding: "14px 16px" }}>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 15.5, fontWeight: 600, lineHeight: 1.2, marginBottom: 8 }}>{o.name}</div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                      <span style={{ background: o.type==="Remote"?"#e8f3ee":"#faf1e0", color:o.type==="Remote"?C.green:C.amber, padding:"2px 8px", borderRadius:5, fontSize:11.5, fontWeight:600 }}>{o.type}</span>
                      <span style={{ background:"#eef0ee", color:C.slate, padding:"2px 8px", borderRadius:5, fontSize:11.5, fontWeight:600 }}>{o.category}</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: C.slate, marginBottom: 12 }}>✦ {o.reason}</div>
                    <button style={{ width:"100%", background: C.teal, color:"#fff", border:"none", padding:"8px 0", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily: F_BODY }}>Refer member →</button>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: C.slateLt, marginTop: 12, fontStyle: "italic" }}>Demo preview of automated matching. Production version proactively surfaces opportunities to members before they fall out of compliance.</div>
            </div>
          )}

          <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.line}`, fontWeight: 700, fontSize: 14, background: "#faf9f5" }}>Activity Log · Verified Hours</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead><tr style={{ borderBottom: `1px solid ${C.line}` }}>
                {["Date","Activity","Organization","Hours","Verification"].map(h=>(<th key={h} style={{textAlign:h==="Hours"||h==="Verification"?"center":"left",padding:"11px 18px",fontSize:11.5,color:C.slate,fontWeight:700,letterSpacing:".04em",textTransform:"uppercase"}}>{h}</th>))}
              </tr></thead>
              <tbody>
                {m.activities.map((a,i)=>(
                  <tr key={i} style={{ borderBottom: "1px solid #f0eee7" }}>
                    <td style={{ padding: "12px 18px", color: C.slate, fontVariantNumeric: "tabular-nums" }}>{a.date}</td>
                    <td style={{ padding: "12px 18px" }}><span style={{background:"#eef3f1",color:C.teal,padding:"3px 9px",borderRadius:6,fontSize:12.5,fontWeight:600}}>{a.type}</span></td>
                    <td style={{ padding: "12px 18px" }}>{a.org}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{a.hours}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center" }}>
                      {a.verified ? <span style={{color:C.green,fontWeight:600,fontSize:13}}>✓ Verified</span> : <span style={{color:C.amber,fontWeight:600,fontSize:13}}>◷ Pending</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function matchFor(m, orgs) {
  const used = new Set((m.activities||[]).map(a=>a.org));
  return (orgs||[]).filter(o=>!used.has(o.name) && o.status==="Certified").map(o=>{
    let s=0; const r=[];
    if(o.type==="Remote"){s+=3;r.push("Remote · flexible hours");}
    if(o.island===m.island){s+=2;r.push(`On ${m.island}`);}
    if(o.island==="Statewide"){s+=2;r.push("Statewide");}
    if(o.verifyRate>=92){s+=1;r.push(`${o.verifyRate}% verified`);}
    return {...o,s,reason:r[0]||"Available"};
  }).sort((a,b)=>b.s-a.s).slice(0,2);
}

function BatchMatch({ members, orgs, back, openMember }) {
  const queue = members.filter(m => (m.status==="At Risk"||m.status==="Behind") && m.daysLeft<=9)
    .sort((a,b)=>a.daysLeft-b.daysLeft);
  return (
    <div className="fade">
      <button onClick={back} style={{ background: "none", border: "none", color: C.teal, fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: F_BODY, marginBottom: 18, padding: 0 }}>← Back to dashboard</button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Outreach Queue · Supply matching</div>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>Match &amp; Resolve</h1>
          <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>{queue.length} members below required hours with limited days remaining · each pre-matched to certified opportunities</div>
        </div>
        <button style={{ background: C.teal, color: "#fff", border: "none", padding: "11px 22px", borderRadius: 24, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: F_BODY }}>Refer all matched →</button>
      </div>

      <div style={{ background: "#fdf9f3", border: `1px solid #ecd9b0`, borderRadius: 12, padding: "13px 18px", marginBottom: 20, fontSize: 13, color: C.slate }}>
        <strong style={{color:C.ink}}>The supply side is the bottleneck, so we lead with it.</strong> Rather than handing your team a list of who's behind, the system pairs each at-risk member with specific, verified opportunities that fit their location, schedule, and remaining hours. One action closes the loop.
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.7fr 1.6fr 0.5fr", padding: "12px 22px", borderBottom: `1px solid ${C.line}`, background: "#faf9f5", fontSize: 11.5, color: C.slate, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>
          <div>Member</div><div>Gap</div><div>Recommended match</div><div></div>
        </div>
        {queue.map((m,idx) => {
          const matches = matchFor(m, orgs);
          return (
            <div key={m.id} style={{ display: "grid", gridTemplateColumns: "1.1fr 0.7fr 1.6fr 0.5fr", alignItems: "center", padding: "16px 22px", borderBottom: idx<queue.length-1?`1px solid #f0eee7`:"none" }}>
              <div className="row-hover" onClick={()=>openMember(m)} style={{ cursor: "pointer" }}>
                <div style={{ fontWeight: 600 }}>{m.name}</div>
                <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 2 }}>{m.id} · {m.island}</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: m.daysLeft<=5?C.red:C.amber, fontVariantNumeric: "tabular-nums" }}>{m.remaining}h short</div>
                <div style={{ fontSize: 12, color: C.slateLt, marginTop: 2 }}>{m.daysLeft} days left</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {matches.map((o,i)=>(
                  <div key={i} style={{ background: "#f7f9f8", border: `1px solid ${C.line}`, borderRadius: 9, padding: "8px 12px", fontSize: 12.5 }}>
                    <div style={{ fontWeight: 600, color: C.ink }}>{o.name}</div>
                    <div style={{ color: C.slate, marginTop: 2 }}>{o.type} · {o.reason}{m.nearCeiling && o.type!=="Work" ? " · keeps income under ceiling" : ""}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "right" }}>
                <button style={{ background: "#e8f3ee", color: C.green, border: `1px solid #bfe0d0`, padding: "7px 14px", borderRadius: 18, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: F_BODY }}>Refer →</button>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 14, textAlign: "center" }}>Demo preview of batch matching. Production surfaces these matches to members proactively, before they reach the risk threshold. Members near the income ceiling are matched to non-work hours automatically.</div>
    </div>
  );
}

function MemberApp({ m, orgs, back }) {
  const matches = matchFor(m, orgs);
  const pct = Math.min(100, Math.round(m.logged/80*100));
  return (
    <div className="fade">
      <button onClick={back} style={{ background: "none", border: "none", color: C.teal, fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: F_BODY, marginBottom: 18, padding: 0 }}>← Back to member detail</button>
      <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
        
        <div style={{ width: 330, flexShrink: 0, margin: "0 auto" }}>
          <div style={{ background: "#10241f", borderRadius: 36, padding: 12, boxShadow: "0 24px 60px rgba(16,36,31,.28)" }}>
            <div style={{ background: C.paper, borderRadius: 26, overflow: "hidden", minHeight: 600 }}>
              
              <div style={{ background: C.tealDk, color: "#fff", padding: "22px 20px 18px" }}>
                <div style={{ fontSize: 12.5, opacity: .8 }}>Aloha, {m.name.split(" ")[0]} 🌺</div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 21, fontWeight: 500, marginTop: 4 }}>Your coverage this month</div>
              </div>
              
              <div style={{ padding: "22px 20px" }}>
                <div style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 18, padding: "20px", textAlign: "center" }}>
                  <div style={{ fontFamily: F_DISPLAY, fontSize: 42, fontWeight: 500, color: statusColor(m.status), lineHeight: 1 }}>{m.logged}<span style={{ fontSize: 20, color: C.slateLt }}>/80</span></div>
                  <div style={{ fontSize: 13, color: C.slate, marginTop: 6 }}>hours logged this month</div>
                  <div style={{ height: 8, background: "#eee", borderRadius: 6, overflow: "hidden", marginTop: 14 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: statusColor(m.status) }} />
                  </div>
                  <div style={{ fontSize: 12.5, color: C.slate, marginTop: 10 }}>{m.remaining>0 ? `${m.remaining} hours to keep your coverage` : "You're all set this month ✓"}</div>
                </div>

                {m.nearCeiling && (
                  <div style={{ background: "#fdf6ec", border: `1px solid #ecd9b0`, borderRadius: 14, padding: "13px 15px", marginTop: 16, fontSize: 12.5, color: C.slate }}>
                    💡 You're earning close to the income limit. Choose <strong>volunteer</strong> hours below to stay covered without affecting your eligibility.
                  </div>
                )}

                {m.remaining>0 && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, margin: "20px 0 10px" }}>Ways to finish your hours</div>
                    {matches.map((o,i)=>(
                      <div key={i} style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 14, padding: "13px 15px", marginBottom: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontWeight: 600, fontSize: 14 }}>{o.name}</div>
                          <span style={{ background: o.type==="Remote"?"#e8f3ee":"#faf1e0", color:o.type==="Remote"?C.green:C.amber, padding:"2px 8px", borderRadius:5, fontSize:11, fontWeight:600 }}>{o.type}</span>
                        </div>
                        <div style={{ fontSize: 12, color: C.slate, margin: "5px 0 11px" }}>{o.category} · {o.reason}</div>
                        <button style={{ width: "100%", background: C.teal, color: "#fff", border: "none", padding: "9px 0", borderRadius: 9, fontSize: 13, fontWeight: 700, fontFamily: F_BODY }}>Sign up</button>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, minWidth: 280, paddingTop: 10 }}>
          <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>The other side of the loop</div>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 30, fontWeight: 500, margin: "6px 0 14px" }}>What the member sees</h1>
          <p style={{ fontSize: 15, color: C.slate, lineHeight: 1.6, maxWidth: 460 }}>
            The dashboard keeps AlohaCare's care team informed. This is what the member experiences: plain-language progress toward their 80 hours, and specific opportunities matched to their life. Self-service engagement means members can act even when your team can't reach them.
          </p>
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              ["Meets members where they are","Web, mobile, SMS, or in person at a partner organization. No app download required."],
              ["Designed for trust, not surveillance","Framed as keeping their coverage, with reminders before deadlines, not enforcement."],
              ["Reaches the hard-to-reach","Members who've changed phone numbers can still engage on their own terms, closing the 'big bucket' gap."],
            ].map(([h,b],i)=>(
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.sand, marginTop: 7, flexShrink: 0 }} />
                <div><div style={{ fontWeight: 700, fontSize: 14, color: C.ink }}>{h}</div><div style={{ fontSize: 13.5, color: C.slate, marginTop: 2, maxWidth: 420 }}>{b}</div></div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 22, fontStyle: "italic" }}>Demo preview of the member experience. Built alongside the AlohaCare operational view as one connected system.</div>
        </div>
      </div>
    </div>
  );
}

function ExemptionsView({ ex, members, openMember }) {
  const flagged = members.filter(m=>m.status==="Exempt");
  const maxCount = Math.max(...ex.categories.map(c=>c.count));
  const confColor = (c)=> c==="High"?C.green:c==="Medium"?C.amber:C.slateLt;
  return (
    <div className="fade">
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Protection · Proactive identification</div>
        <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>Exemption Intelligence</h1>
        <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Members who shouldn't have to comply, identified from existing data before they're ever asked to act</div>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
        <StatCard label="Population Reviewed" value={ex.reviewedPopulation.toLocaleString()} sub="expansion adults screened" color={C.teal} big />
        <StatCard label="Likely Exempt" value={ex.identified.toLocaleString()} sub="identified from existing data" color={C.green} />
        <StatCard label="Subject to Requirement" value={ex.subjectAfter.toLocaleString()} sub="after exemptions applied" color={C.sand} />
        <StatCard label="Needs Manual Review" value={ex.needsReview} sub="ambiguous, flagged for staff" color={C.amber} />
      </div>

      <div style={{ background: "#f4f8f6", border: `1px solid #cfe4d9`, borderRadius: 12, padding: "14px 18px", marginBottom: 24, fontSize: 13.5, color: C.slate }}>
        <strong style={{ color: C.ink }}>Why this matters:</strong> In Arkansas's 2018 work-requirement rollout, most coverage losses were eligible people who failed paperwork, including many who were exempt but couldn't prove it. Identifying exemptions up front, from claims and state data, protects members from losing coverage by accident and protects AlohaCare's capitation revenue.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
        
        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "22px 24px" }}>
          <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Exemptions by Category</div>
          <div style={{ fontSize: 13, color: C.slate, marginBottom: 20 }}>Statutory exclusions &amp; exceptions, identified by data source</div>
          {ex.categories.map((c,i)=>(
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6 }}>
                <span style={{ fontWeight: 600 }}>{c.label}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", color: C.slate }}>{c.count.toLocaleString()}</span>
              </div>
              <div style={{ height: 8, background: "#eee", borderRadius: 6, overflow: "hidden", marginBottom: 4 }}>
                <div className="bar-fill" style={{ width: `${c.count/maxCount*100}%`, height: "100%", background: C.teal }} />
              </div>
              <div style={{ fontSize: 12, color: C.slateLt }}>Source: {c.source}</div>
            </div>
          ))}
        </div>

        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "22px 24px" }}>
          <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Recently Flagged</div>
          <div style={{ fontSize: 13, color: C.slate, marginBottom: 18 }}>Sample of members auto-identified as exempt</div>
          {flagged.slice(0,6).map(m=>(
            <div key={m.id} className="row-hover" onClick={()=>openMember(m)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 12px", border: `1px solid ${C.line}`, borderRadius: 10, marginBottom: 9, cursor: "pointer" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: C.slateLt, marginTop: 2 }}>{m.exemptReason || "Exempt"}</div>
              </div>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: confColor(m.exemptConfidence||"Medium") }}>{m.exemptConfidence||"Medium"}</span>
            </div>
          ))}
          {flagged.length===0 && <div style={{ fontSize: 13, color: C.slateLt }}>No exempt members in current sample view.</div>}
        </div>
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 18, textAlign: "center" }}>Demo preview. Exemption determinations remain the state's authority. The system surfaces likely exemptions from available data so members and staff can confirm them before coverage is ever at risk.</div>
    </div>
  );
}

function ReportView({ members, sum }) {
  const needsOutreach = members.filter(m=>m.status==="At Risk"||m.status==="Behind");
  return (
    <div className="fade">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Monthly Compliance Report</div>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>December 2026 · AlohaCare</h1>
          <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Generated for state verification submission · Configurable to AlohaCare standards</div>
        </div>
        <button style={{ background: C.teal, color: "#fff", border: "none", padding: "11px 22px", borderRadius: 24, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: F_BODY }}>↓ Export Report (PDF / CSV)</button>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
        <StatCard label="Members Reported" value={sum.total} color={C.teal} />
        <StatCard label="Compliant" value={`${sum.onTrack}`} sub={`${Math.round(sum.onTrack/sum.total*100)}% of applicable`} color={C.green} />
        <StatCard label="Requires Outreach" value={needsOutreach.length} sub="at risk or behind" color={C.amber} />
        <StatCard label="Coverage at Risk" value={sum.behind} sub="behind on hours" color={C.red} />
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.line}`, fontWeight: 700, fontSize: 14, background: "#faf9f5", display: "flex", justifyContent: "space-between" }}>
          <span>Priority Outreach List · {needsOutreach.length} members</span>
          <span style={{ color: C.slateLt, fontWeight: 400, fontSize: 13 }}>Sorted by urgency</span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead><tr style={{ borderBottom: `1px solid ${C.line}` }}>
            {["Member","ID","Status","Hours","To 80","Days left","Recommended action"].map(h=>(<th key={h} style={{textAlign:h==="Member"||h==="ID"||h==="Recommended action"?"left":"center",padding:"11px 18px",fontSize:11.5,color:C.slate,fontWeight:700,letterSpacing:".04em",textTransform:"uppercase"}}>{h}</th>))}
          </tr></thead>
          <tbody>
            {needsOutreach.sort((a,b)=>a.daysLeft-b.daysLeft).slice(0,12).map(m=>(
              <tr key={m.id} style={{ borderBottom: "1px solid #f0eee7" }}>
                <td style={{ padding: "12px 18px", fontWeight: 600 }}>{m.name}</td>
                <td style={{ padding: "12px 18px", color: C.slate, fontVariantNumeric:"tabular-nums" }}>{m.id}</td>
                <td style={{ padding: "12px 18px", textAlign:"center" }}><span style={{background:statusBg(m.status),color:statusColor(m.status),padding:"3px 10px",borderRadius:16,fontSize:12,fontWeight:700}}>{m.status}</span></td>
                <td style={{ padding: "12px 18px", textAlign:"center", fontVariantNumeric:"tabular-nums" }}>{m.logged}</td>
                <td style={{ padding: "12px 18px", textAlign:"center", fontWeight:700, fontVariantNumeric:"tabular-nums" }}>{m.remaining}</td>
                <td style={{ padding: "12px 18px", textAlign:"center", color:m.daysLeft<=5?C.red:C.slate, fontWeight:m.daysLeft<=5?700:400, fontVariantNumeric:"tabular-nums" }}>{m.daysLeft}</td>
                <td style={{ padding: "12px 18px", color: C.slate, fontSize:13 }}>{m.status==="Behind"?"Immediate contact · match to opportunity":"Reminder · confirm pending hours"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 12, textAlign: "center" }}>This report is delivered monthly and formatted to flow into the state verification process. Cadence and fields configurable per AlohaCare requirements.</div>
    </div>
  );
}

function NetworkView({ orgs }) {
  const totalPlaced = orgs.reduce((s,o)=>s+o.placed,0);
  const avgVerify = Math.round(orgs.reduce((s,o)=>s+o.verifyRate,0)/orgs.length);
  const inReview = orgs.filter(o=>o.status==="In Review").length;
  const vColor = (r) => r>=92 ? C.green : r>=89 ? C.sand : C.amber;
  return (
    <div className="fade">
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Engagement Network · Supply</div>
        <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>Participating Organizations</h1>
        <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Where verified hours originate · in-person, remote, and skill-based opportunities</div>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
        <StatCard label="Active Organizations" value={orgs.length} sub="network partners" color={C.teal} />
        <StatCard label="Members Placed" value={totalPlaced.toLocaleString()} sub="↑ 8% this cycle" color={C.sand} />
        <StatCard label="Avg Verification Rate" value={`${avgVerify}%`} sub="hours confirmed" color={C.green} />
        <StatCard label="Pending Onboarding" value={inReview} sub="organizations in review" color={C.amber} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {orgs.map((o,i)=>(
          <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "20px 22px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute",top:0,left:0,width:"100%",height:4,background: vColor(o.verifyRate) }} />
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
              <div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600, lineHeight:1.2 }}>{o.name}</div>
                <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 4 }}>{o.island} · {o.type} · {o.category}</div>
              </div>
              <span style={{ background: o.status==="Certified"?"#e8f3ee":"#faf1e0", color: o.status==="Certified"?C.green:C.amber, padding:"4px 11px", borderRadius:16, fontSize:11, fontWeight:700, letterSpacing:".05em", border:`1px solid ${o.status==="Certified"?"#bfe0d0":"#ecd9b0"}`, whiteSpace:"nowrap" }}>{o.status.toUpperCase()}</span>
            </div>
            <div style={{ display:"flex", gap:28, marginBottom:14, marginTop:16 }}>
              <div><div style={{ fontSize:11, color:C.slateLt, letterSpacing:".06em", textTransform:"uppercase", marginBottom:5 }}>Members Placed</div><div style={{ fontFamily:F_DISPLAY, fontSize:26, fontWeight:500 }}>{o.placed}</div></div>
              <div><div style={{ fontSize:11, color:C.slateLt, letterSpacing:".06em", textTransform:"uppercase", marginBottom:5 }}>Verification Rate</div><div style={{ fontFamily:F_DISPLAY, fontSize:26, fontWeight:500, color: vColor(o.verifyRate) }}>{o.verifyRate}%</div></div>
            </div>
            <div style={{ height:6, background:"#eee", borderRadius:6, overflow:"hidden" }}><div style={{ width:`${o.verifyRate}%`, height:"100%", background: vColor(o.verifyRate) }} /></div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 18, textAlign: "center" }}>Verification rate measures the share of logged hours confirmed in state-acceptable format. Remote & skill-based organizations expand supply beyond geographic limits.</div>
    </div>
  );
}

function AnalyticsView({ islands, pathways, members, openMember }) {
  const pColor = { "Volunteer": C.green, "Employment": C.sand, "Education": C.teal, "Unassigned": C.red };
  let acc = 0;
  const segs = pathways.map(p => { const start = acc; acc += p.pct; return { ...p, start, end: acc }; });
  const grad = `conic-gradient(${segs.map(s=>`${pColor[s.label]} ${s.start*3.6}deg ${s.end*3.6}deg`).join(", ")})`;
  const outreach = members.filter(m=>m.status==="Behind").slice(0,4);
  return (
    <div className="fade">
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Insights</div>
        <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>Analytics</h1>
        <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Compliance patterns across islands and pathways</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16, marginBottom: 24 }}>
        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "22px 24px" }}>
          <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600 }}>Compliance by Island</div>
          <div style={{ fontSize: 13, color: C.slate, marginBottom: 20, marginTop: 2 }}>Distribution per geography</div>
          {islands.map(isl=>(
            <div key={isl.island} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}><span style={{ fontWeight: 600 }}>{isl.island}</span><span style={{ color: C.slateLt, fontVariantNumeric: "tabular-nums" }}>{isl.compliant}% compliant</span></div>
              <div style={{ display: "flex", height: 12, borderRadius: 6, overflow: "hidden", border: `1px solid ${C.line}` }}>
                <div style={{ width: `${isl.compliant}%`, background: C.green }} /><div style={{ width: `${isl.atRisk}%`, background: C.amber }} /><div style={{ width: `${isl.behind}%`, background: C.red }} />
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 18, marginTop: 18, fontSize: 12.5, color: C.slate }}>
            {[["Compliant",C.green],["At Risk",C.amber],["Behind",C.red]].map(([l,c])=>(<span key={l} style={{ display:"flex", alignItems:"center", gap:6 }}><span style={{width:10,height:10,borderRadius:3,background:c}}/>{l}</span>))}
          </div>
        </div>

        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "22px 24px" }}>
          <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600 }}>Pathway Distribution</div>
          <div style={{ fontSize: 13, color: C.slate, marginBottom: 18, marginTop: 2 }}>How members meet the requirement</div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <div style={{ width: 150, height: 150, borderRadius: "50%", background: grad, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 92, height: 92, borderRadius: "50%", background: C.card, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 24, fontWeight: 500 }}>58%</div>
                <div style={{ fontSize: 10.5, color: C.slateLt }}>volunteer</div>
              </div>
            </div>
          </div>
          {pathways.map(p=>(
            <div key={p.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13.5, marginBottom: 9 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: pColor[p.label] }} />{p.label}</span>
              <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "22px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: 17 }}>⚠</span><span style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600 }}>Members Requiring Immediate Outreach</span></div>
        <div style={{ fontSize: 13, color: C.slate, marginBottom: 18, marginTop: 2 }}>Behind on required hours · prioritized for care management contact</div>
        {outreach.map(m=>(
          <div key={m.id} className="row-hover" onClick={()=>openMember(m)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", border: `1px solid ${C.line}`, borderRadius: 11, marginBottom: 10 }}>
            <div><div style={{ fontWeight: 600 }}>{m.name}</div><div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 2 }}>{m.id} · {m.island} · {m.daysLeft} days left in period</div></div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}><span style={{ color: C.red, fontWeight: 700, fontVariantNumeric: "tabular-nums", fontSize: 14 }}>{m.logged}/80h</span><span style={{ background: "#f7e6e1", color: C.red, padding: "7px 16px", borderRadius: 18, fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em" }}>OUTREACH →</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportingView({ r }) {
  const sColor = (s) => s==="Complete" ? C.green : s==="In Progress" ? C.amber : C.slateLt;
  const sBg = (s) => s==="Complete" ? "#e8f3ee" : s==="In Progress" ? "#faf1e0" : "#eef0ee";
  return (
    <div className="fade">
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 13, color: C.slate, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>State Verification</div>
        <h1 style={{ fontFamily: F_DISPLAY, fontSize: 32, fontWeight: 500, margin: "6px 0 0" }}>State Reporting</h1>
        <div style={{ fontSize: 14, color: C.slate, marginTop: 4 }}>Documentation workflow built to support Hawai'i Med-QUEST reporting requirements</div>
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 26 }}>
        <StatCard label="Docs Generated" value={r.docsGenerated.toLocaleString()} sub="↑ 12% this cycle" color={C.teal} />
        <StatCard label="Submitted to State" value={r.submitted.toLocaleString()} sub="verification packages" color={C.sand} />
        <StatCard label="Pending Review" value={r.pendingReview} sub="awaiting confirmation" color={C.amber} />
        <StatCard label="Rejected" value={r.rejected} sub="documentation errors" color={C.green} />
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: "26px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, paddingBottom: 22, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: "#e8f3ee", display: "flex", alignItems: "center", justifyContent: "center", color: C.green, fontSize: 21 }}>✓</div>
          <div><div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 600 }}>Reporting workflow active</div><div style={{ fontSize: 13.5, color: C.slate, marginTop: 3 }}>Documentation formatted to support Med-QUEST community engagement reporting. The state remains the determining authority. We supply verified documentation.</div></div>
        </div>
        {r.pipeline.map((p,i)=>(
          <div key={p.step} style={{ display: "flex", alignItems: "center", gap: 18, padding: "16px 0", borderBottom: i<r.pipeline.length-1?`1px solid #f0eee7`:"none" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${sColor(p.status)}`, color: sColor(p.status), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{p.step}</div>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 15 }}>{p.name}</div><div style={{ fontSize: 13, color: C.slate, marginTop: 2 }}>{p.desc}</div></div>
            <span style={{ background: sBg(p.status), color: sColor(p.status), padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 700, letterSpacing: ".05em" }}>{p.status.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12.5, color: C.slateLt, marginTop: 18, textAlign: "center" }}>Per H.R. 1, managed care plans supply documentation but the state makes all compliance determinations. This pipeline produces state-acceptable verification packages.</div>
    </div>
  );
}
