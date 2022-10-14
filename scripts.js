"use strict";

/////////////////////////////////////////////////
// Elements
var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

const containerMovements = document.querySelector(".movements");
var userlist_today = document.querySelector(".lboard_mem_today");
var userlist_month = document.querySelector(".lboard_mem_month");
var userlist_year = document.querySelector(".lboard_mem_year");
/////////////////////////////////////////////////
// Functions

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

const displayMovements = function (acc, sort = false) {
	containerMovements.innerHTML = "";
	const movs = sort
		? acc.movements.slice().sort((a, b) => a - b)
		: acc.movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";

		const date = new Date(acc.movementsDates[i]);

		const html = `
		<div class="movements__row">
			<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		</div>
		`;
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

const displayUsersToday = function (list, sort = false) {
	userlist_today.innerHTML = "";
	const users = [...list];
	users.forEach(function (user, i) {
		const html = `
		<div class="lboard_mem">
			<div class="img">
				<img src="pic_1.png" alt="picture_1">
			</div>
			<div class="name_bar">
				<p><span>${users.length - i}.</span> Charles John</p>
				<div class="bar_wrap">
					<div class="inner_bar" style="width: 95%"></div>
				</div>
			</div>
			<div class="points">
				195 points
			</div>
		</div>
		`;
		userlist_today.insertAdjacentHTML("afterbegin", html);
    });
}

const displayUsersMonth = function (list, sort = false) {
	userlist_month.innerHTML = "";
	const users = [...list];
	users.forEach(function (user, i) {
		const html = `
		<div class="lboard_mem">
			<div class="img">
				<img src="pic_1.png" alt="picture_1">
			</div>
			<div class="name_bar">
				<p><span>${users.length - i}.</span> Charles John</p>
				<div class="bar_wrap">
					<div class="inner_bar" style="width: 95%"></div>
				</div>
			</div>
			<div class="points">
				195 points
			</div>
		</div>
		`;
		userlist_month.insertAdjacentHTML("afterbegin", html);
	});
}

const displayUsersYear = function (list, sort = false) {
	userlist_year.innerHTML = "";
	const users = [...list];
	users.forEach(function (user, i) {
		const html = `
		<div class="lboard_mem">
			<div class="img">
				<img src="pic_1.png" alt="picture_1">
			</div>
			<div class="name_bar">
				<p><span>${users.length - i}.</span> Charles John</p>
				<div class="bar_wrap">
					<div class="inner_bar" style="width: 95%"></div>
				</div>
			</div>
			<div class="points">
				195 points
			</div>
		</div>
		`;
		userlist_year.insertAdjacentHTML("afterbegin", html);
	});
}

let UserList = [
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	},
	{
		UserName: "Jeff",
		UserImage: "pic_1.png",
		Trials: "10"
	}
]

displayUsersToday(UserList);
displayUsersMonth(UserList);
displayUsersYear(UserList);