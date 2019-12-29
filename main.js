let searchUrl = 'https://www.firstweber.com/homes-for-sale/Shorewood_combo/P_lp-cd-presentation/sc_l_listing_price+DESC/sd_S2/page_1//nts_100/';

function loadPropertyDetails() {
    $.get(searchUrl, function(data) {

        let streetAddresses = [];
        let cityStates = [];
        let prices = [];
        let editedDetails = [];
        let propLinks = [];
        let photoUrls = [];

        $.each($(data).find('div.address'), function(i, val) {
            streetAddresses.push(val.innerText);
        });
        $.each($(data).find('div.city'), function(i, val) {
            cityStates.push(val.innerText);
        });
        $.each($(data).find('div.price'), function(i, val) {
            prices.push((val.innerText).trim());
        });
        $.each($(data).find('div.bedbath'), function(i, val) {
            let propertyDetails = val.innerText.trim();
            let indexedDetails = propertyDetails.split("");
            let detailObject = {br: indexedDetails[0], fullbath: indexedDetails[27], halfbath: indexedDetails[48]};
            editedDetails.push(detailObject);
        });
        $.each($(data).find('a.tilelink'), function(i, val) {
            let link = val.href.split('/home-for-sale');
            let fwLink = `http://firstweber.com/home-for-sale${link[1]}`;
            propLinks.push(fwLink);
        });
        $.each($(data).find('div.property img'), function(i, val) {
            let fullUrl = val.src;
            let fullUrlSplitOne = fullUrl.split('=');
            let fullUrlSplitTwo = fullUrlSplitOne[1].split('&');
            let photoUrl = fullUrlSplitTwo[0];
            photoUrls.push(photoUrl);
        });
        
        compileData(streetAddresses, cityStates, prices, editedDetails, propLinks, photoUrls);
    });
};

function compileData(streetAddresses, cityStates, prices, editedDetails, propLinks, previewPhotoUrls) {
    
    let propertiesArray = [];

    for (let i = 0; i < streetAddresses.length; i++) {

        let property = {
             'city': cityStates[i],
             'rooms': editedDetails[i],
             'prices': prices[i],
             'street': streetAddresses[i],
             'link': propLinks[i],
             'photo': previewPhotoUrls[i]
        };

        propertiesArray.push(property);
    };
    filterProperties(propertiesArray);
};

function filterProperties(propertiesArray, previewPhotoUrls) {
    let filteredArray = [];
    for (i = 0; i < propertiesArray.length; i++) {
        if (propertiesArray[i].city && 
            propertiesArray[i].rooms && 
            propertiesArray[i].prices && 
            propertiesArray[i].street &&
            propertiesArray[i].link &&
            propertiesArray[i].photo) 
                {filteredArray.push(propertiesArray[i])}
        };
    buildPreviews(filteredArray);
};

function buildPreviews(filteredArray) {

    for (i = 0; i < filteredArray.length; i++) {

    let city = filteredArray[i].city; 
    let price = filteredArray[i].prices;
    let street = filteredArray[i].street;
    let br = filteredArray[i].rooms.br;
    let bath = filteredArray[i].rooms.fullbath;
    let halfbath = filteredArray[i].rooms.halfbath;
    let fulllisting = filteredArray[i].link;
    let photo = filteredArray[i].photo;

    if (halfbath == true) {

        let payload = 
            
    `<div class="listing">
        <div class="property-photo-container">
            <img class="property-photo" src="${photo}"></img>
        </div>
        <div class="property-info-container">
            <div class="city">${city}</div>
            <div class="rooms">${br} br / ${bath} bathrooms / ${halfbath} half-bath</div>
            <div class="price-address-container">
                <div class="price">${price} </div>
                <div class="address">${street}</div>
            </div>
            <div class="property-details">
                <a href="mailto:karine@sewartrealestategroup.com?subject=Schedule showing at ${street}">Schedule Showing</a> | <a href="${fulllisting}">View Full Listing</a>
            </div>
        </div>
    </div>`;

        $('.listings').append(payload);

        } else {
            let payload = 
            
            `<div class="listing">
            <div class="property-photo-container">
                <img class="property-photo" src="${photo}"></img>
            </div>
            <div class="property-info-container">
                <div class="city">${city}</div>
                <div class="rooms">${br} br / ${bath} bathrooms</div>
                <div class="price-address-container">
                    <div class="price">${price} </div>
                    <div class="address">${street}</div>
                </div>
                <div class="property-details">
                    <a href="mailto:karine@sewartrealestategroup.com?subject=Schedule showing at ${street}">Schedule Showing</a> | <a href="${fulllisting}">View Full Listing</a>
                </div>
            </div>
        </div>`;
        
                $('.listings').append(payload);
        };

    };

};

function chooseNeighborhood() {
    $('#mequon').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/Mequon_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#whitefishbay').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/whitefish+bay_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#riverhills').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/river+hills_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#shorewood').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/shorewood_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#foxpoint').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/fox+point_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#cedarburg').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/cedarburg_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#glendale').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/glendale_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
    $('#bayside').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/bayside_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadCommunityProperties(searchUrl);
    });
};

function loadCommunityProperties(searchUrl) {
    $.get(searchUrl, function(data) {

        let streetAddresses = [];
        let cityStates = [];
        let prices = [];
        let editedDetails = [];
        let propLinks = [];
        let photoUrls = [];

        $.each($(data).find('div.address'), function(i, val) {
            streetAddresses.push(val.innerText);
        });
        $.each($(data).find('div.city'), function(i, val) {
            cityStates.push(val.innerText);
        });
        $.each($(data).find('div.price'), function(i, val) {
            prices.push((val.innerText).trim());
        });
        $.each($(data).find('div.bedbath'), function(i, val) {
            let propertyDetails = val.innerText.trim();
            let indexedDetails = propertyDetails.split("");
            let detailObject = {br: indexedDetails[0], fullbath: indexedDetails[27], halfbath: indexedDetails[48]};
            editedDetails.push(detailObject);
        });
        $.each($(data).find('a.tilelink'), function(i, val) {
            let link = val.href.split('/home-for-sale');
            let fwLink = `http://firstweber.com/home-for-sale${link[1]}`;
            propLinks.push(fwLink);
        });
        $.each($(data).find('div.property img'), function(i, val) {
            let fullUrl = val.src;
            let fullUrlSplitOne = fullUrl.split('=');
            let fullUrlSplitTwo = fullUrlSplitOne[1].split('&');
            let photoUrl = fullUrlSplitTwo[0];
            photoUrls.push(photoUrl);
        });
        
        compileData(streetAddresses, cityStates, prices, editedDetails, propLinks, photoUrls);
    });
};

// function buildPages() {
// //Zillow API result is used to build new pages, place on SRG site, and update sitemap
// };

loadPropertyDetails();
chooseNeighborhood();
