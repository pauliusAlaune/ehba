<?php include './includes/header.php'; ?>

<section class="newsSection">
    <div class="newsSection__holder">
        <div class="newsSection__holder__catBlock">
            <ul class="catListHolder">
                <li class="catListHolder__item active">All posts</li>
                <li class="catListHolder__item">Rule Set Changes</li>
                <li class="catListHolder__item dropClick">
                    <span class="dropdown">
                        <span class="dropdown--text">Community</span>
                        <span class="dropdown--icon"><img src="assets/images/ico-dropdown.svg"></span>
                    </span>
                    <ul class="dropdown__list">
                        <li class="dropdown__list--item">Radio astronomy</li>
                        <li class="dropdown__list--item">A  beginners guide</li>
                    </ul>
                </li>
                <li class="catListHolder__item">Radio astronomy</li>
                <li class="catListHolder__item dropClick">
                    <span class="dropdown">
                        <span class="dropdown--text">A  beginners guide</span>
                        <span class="dropdown--icon"><img src="assets/images/ico-dropdown.svg"></span>
                    </span>
                    <ul class="dropdown__list">
                        <li class="dropdown__list--item">Radio astronomy</li>
                        <li class="dropdown__list--item">A  beginners guide</li>
                    </ul>
                </li>
                <li class="catListHolder__item dropClick">
                    <span class="dropdown">
                        <span class="dropdown--text">How to play Bike Polo</span>
                        <span class="dropdown--icon"><img src="assets/images/ico-dropdown.svg"></span>
                    </span>
                    <ul class="dropdown__list">
                        <li class="dropdown__list--item">Radio astronomy</li>
                        <li class="dropdown__list--item">A  beginners guide</li>
                    </ul>
                </li>
                <li class="catListHolder__item">What is homeopatic medicine</li>
            </ul>
        </div>
        <div class="newsSection__holder__postsBlock">
            <div class="newsSection__holder__postsBlock__titleAndSearch">
                <div class="newsSection__holder__postsBlock__titleAndSearch__titleBlock">
                    <h3 class="title">All posts</h3>
                </div>
                <div class="newsSection__holder__postsBlock__titleAndSearch__searchBlock">
                    <div class="search-container">
                        <form id="newsSectionSearchForm" class="newsSectionSearch">
                            <input type="text" placeholder="Search.." name="search" class="newSearch" id="newSearch">
                            <button type="submit" class="newBtnSearch" id="newBtnSearch"><img src="assets/images/search.svg"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include './includes/footer.php'; ?>