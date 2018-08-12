<?php include './includes/header.php'; ?>

<section class="eventSection">
	<div class="eventSection__holder">
		<div class="titleBlock">
			<h3 class="title">EVENTS</h3>
		</div>
		<div class="mapAndAddEventHolder">
			<div class="mapBlock">
				<div class="mapBlock__map">
					<div class="mapBlock__map__mapImg"></div>
				</div>
				<form class="mapBlock__eventBlock">
					<div class="mapBlock__eventBlock__sortBy">
						<button class="sortByBtn">
							<span class="word">SORT BY</span>
							<img class="icon" src="assets/images/ico-dropdown.svg">
						</button>
					</div>
					<div class="mapBlock__eventBlock__category">
						<button class="categoryBtn">
							<span class="word">CATEGORY</span>
							<img class="icon" src="assets/images/ico-dropdown.svg">
						</button>
					</div>
					<div class="mapBlock__eventBlock__date">
						<button class="dateBtn">
							<span class="word">DATE</span>
							<img class="icon" src="assets/images/ico-dropdown.svg">
						</button>
					</div>
					<div class="mapBlock__eventBlock__search">
						<input type="text" name="searchWord" id="searchWord" class="searchWord" placeholder="Search events">
						<button type="submit" class="searchSubmit">
							<img src="assets/images/search.svg">
						</button>
					</div>
				</form>
			</div>
			<div class="addEventBlock">
				<div class="addEventBlock__sponsorContent">
					<div class="addEventBlock__sponsorContent__imgCover"></div>
					<a class="addEventBlock__sponsorContent__infoBlock">
						<h5 class="text">SPONSOR CONTENT</h5>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<?php include './includes/footer.php'; ?>