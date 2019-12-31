let searchUrl = 'https://www.firstweber.com/homes-for-sale/Shorewood_combo/P_lp-cd-presentation/sc_l_listing_price+DESC/sd_S2/page_1//nts_100/';

// let $address = $('div.address');
// let $cityState = $('div.city');
// let $price = $('div.price');
// let $rooms = $('div.bedbath');
// let $propLink = $('a.tilelink');
// let $photoUrl = $('div.property img');

function loadPropertyDetails(searchUrl) {

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
        
        buildPropertyObjects(streetAddresses, cityStates, prices, editedDetails, propLinks, photoUrls);
    });
};

function buildPropertyObjects(streetAddresses, cityStates, prices, editedDetails, propLinks, photoUrls) {
    
    let propertyObjectsArray = [];

    for (let i = 0; i < streetAddresses.length; i++) {

        let property = {
             'city': cityStates[i],
             'rooms': editedDetails[i],
             'prices': prices[i],
             'street': streetAddresses[i],
             'link': propLinks[i],
             'photo': photoUrls[i]
        };

        propertyObjectsArray.push(property);

    };

    filterProperties(propertyObjectsArray);
};

function filterProperties(propertyObjectsArray) {
    let filteredPropertyObjectsArray = [];
    for (i = 0; i < propertyObjectsArray.length; i++) {
        if (propertyObjectsArray[i].city && 
            propertyObjectsArray[i].rooms && 
            propertyObjectsArray[i].prices && 
            propertyObjectsArray[i].street &&
            propertyObjectsArray[i].link &&
            propertyObjectsArray[i].photo) 
                {filteredPropertyObjectsArray.push(propertyObjectsArray[i])}
        };

    buildPreviews(filteredPropertyObjectsArray);

};

function buildPreviews(filteredPropertyObjectsArray) {

    for (i = 0; i < filteredPropertyObjectsArray.length; i++) {

    let city = filteredPropertyObjectsArray[i].city; 
    let price = filteredPropertyObjectsArray[i].prices;
    let street = filteredPropertyObjectsArray[i].street;
    let br = filteredPropertyObjectsArray[i].rooms.br;
    let bath = filteredPropertyObjectsArray[i].rooms.fullbath;
    let halfbath = filteredPropertyObjectsArray[i].rooms.halfbath;
    let fulllisting = filteredPropertyObjectsArray[i].link;
    let photo = filteredPropertyObjectsArray[i].photo;

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

//Is this the correct way to cache selectors here?
    //let $listings = $('.listings');
    //let $mequon = $('#mequon');
    //let $whitefishbay = $('#whitefishbay');
    //let $riverhills = $('#riverhills');
    //let $shorewood = $('#shorewood');
    //let $foxpoint = $('#foxpoint');
    //let $cedarburg = $('#cedarburg');
    //let $glendale = $('glendale');
    //let $bayside = $('bayside');

    $('#mequon').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/Mequon_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#whitefishbay').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/whitefish+bay_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#riverhills').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/river+hills_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#shorewood').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/shorewood_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#foxpoint').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/fox+point_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#cedarburg').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/cedarburg_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#glendale').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/glendale_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
    $('#bayside').on('click', function() {
        $('.listings').empty();
        let searchUrl = 'https://www.firstweber.com/homes-for-sale/bayside_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/';
        loadPropertyDetails(searchUrl);
    });
};

loadPropertyDetails(searchUrl);
chooseNeighborhood();
