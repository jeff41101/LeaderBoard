"use strict";

/////////////////////////////////////////////////
// Elements
var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var items = document.querySelectorAll(".lboard_item");
var pfp = ["👴", "🧓", "👵", "👧", "🧒", "🧑", "👳", "🤴", "👼", "👩‍🦳", "👨", "👰", "👨‍🦰", "👩‍🦰", "👩‍🦲", "👱‍"];

//var userlist_trivia = document.querySelector(".lboard_mem_today");
var userlist_matchinggame = document.querySelector(".lboard_mem_month");
/////////////////////////////////////////////////
// Functions

// Raffle
function shuffleArray(inputArray) {
	inputArray.sort(() => Math.random() - 0.5);
}

tabs.forEach(function (tab) {
	tab.addEventListener("click", function () {
		var currenttab = tab.getAttribute("data-li");

		tabs.forEach(function (tab) {
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function (item) {
			item.style.display = "none";
		})

		if (currenttab == "today") {
			today.style.display = "block";
		}
		else if (currenttab == "month") {
			month.style.display = "block";
		}
		else {
			year.style.display = "block";
		}
	})
})

/*const displayTriviaLeaderBoard = function (list, sort = false) {
	var result;

	var settings = {
		"url": "https://wjuc7h96k7.execute-api.ap-northeast-1.amazonaws.com/dev/GetRank?x-api-key=WHJzpbI0r29A01Hbsg5H776YNuyWe5FI5XCgplRu",
		"method": "POST",
		"timeout": 0,
		"headers": {
			"Accept": "application/json",
			"x-api-key": "WHJzpbI0r29A01Hbsg5H776YNuyWe5FI5XCgplRu"
		},
	};

	$.ajax(settings).done(function (response) {
		result = response;
		userlist_trivia.innerHTML = "";
		var users = [...result].slice(0, 7).reverse();
		var highest = users[0].Score;
		var lowest = users[6].Score;
		shuffleArray(pfp);
		for (let i = 0; i < 7; i++) {
			console.log(typeof users[i].Score);
			var totalScore = ((lowest - users[i].Score) * 99 / (lowest - highest) - 100) * -1;
			const html = `
		<div class="lboard_mem">
			<div class="img">
				<h2>${pfp[i]}</h2>
			</div>
			<div class="name_bar">
				<pre><p><span>${7 - i}.</span> ${users[i].UserName}    Score: ${users[i].Score}    Time: ${users[i].Time}    Trials: ${users[i].Trials}</p> </pre>
				<div class="bar_wrap">
					<div class="inner_bar" style="width: ${parseInt(totalScore, 10)}%"></div>
				</div>
			</div>
			<div class="points">
				${parseInt(totalScore, 10)} points
			</div>
		</div>
		`;
			userlist_trivia.insertAdjacentHTML("afterbegin", html);
		};
	});
}*/

const displayMatchingGameLeaderBoard = function (list, sort = false) {

	var result;

	var settings = {
		"url": "https://wjuc7h96k7.execute-api.ap-northeast-1.amazonaws.com/dev/GetRank?x-api-key=WHJzpbI0r29A01Hbsg5H776YNuyWe5FI5XCgplRu",
		"method": "POST",
		"timeout": 0,
		"headers": {
			"Accept": "application/json",
			"x-api-key": "WHJzpbI0r29A01Hbsg5H776YNuyWe5FI5XCgplRu"
		},
	};

	$.ajax(settings).done(function (response) {
		result = response;
		userlist_matchinggame.innerHTML = "";
		var users = [...result].slice(0, 7).reverse();
		var highest = users[0].Score;
		var lowest = users[6].Score;
		shuffleArray(pfp);
		for (let i = 0; i < 7; i++) {
			console.log(typeof users[i].Score);
			var totalScore = ((lowest - users[i].Score) * 99 / (lowest - highest) - 100)* -1;
			const html = `
		<div class="lboard_mem">
			<div class="img">
				<h2>${pfp[i]}</h2>
			</div>
			<div class="name_bar">
				<pre><p><span>${7 - i}.</span> ${users[i].UserName}    Score: ${users[i].Score}    Time: ${users[i].Time}    Trials: ${users[i].Trials}</p> </pre>
				<div class="bar_wrap">
					<div class="inner_bar" style="width: ${parseInt(totalScore, 10)}%"></div>
				</div>
			</div>
			<div class="points">
				${parseInt(totalScore, 10)} points
			</div>
		</div>
		`;
			userlist_matchinggame.insertAdjacentHTML("afterbegin", html);
		};
	});
}


//displayTriviaLeaderBoard();
displayMatchingGameLeaderBoard();