function menuDrop() {
  $('.menu-button-container').on('click', function() {
    $('.navwrapper').toggleClass('mobileNav');
  });
}

let searchUrl =
  'https://www.firstweber.com/homes-for-sale/Shorewood_combo/P_lp-cd-presentation/sc_l_listing_price+DESC/sd_S2/page_1//nts_100/';

const neighborhoods = {
  '#mequon':
    'https://www.firstweber.com/homes-for-sale/Mequon_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#whitefishbay':
    'https://www.firstweber.com/homes-for-sale/whitefish+bay_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#riverhills':
    'https://www.firstweber.com/homes-for-sale/river+hills_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#shorewood':
    'https://www.firstweber.com/homes-for-sale/shorewood_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#foxpoint':
    'https://www.firstweber.com/homes-for-sale/fox+point_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#cedarburg':
    'https://www.firstweber.com/homes-for-sale/cedarburg_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#glendale':
    'https://www.firstweber.com/homes-for-sale/glendale_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
  '#bayside':
    'https://www.firstweber.com/homes-for-sale/bayside_combo/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/page_1//nts_100/',
};

function loadPropertyDetails(url) {
  $.get(url, function(data) {
    const properties = [];
    $.each($(data), function(_, element) {
      if (element.id === 'pagewrap') {
        const $listing = $(element).find('.props_summary .property');
        $listing.each(function(i, property) {
          const street = $(property)
            .find('.address')
            .text();
          const city = $(property)
            .find('.city')
            .text();
          const price = $(property)
            .find('.price')
            .text()
            .trim();
          const [bedrooms, full, half] = $(property)
            .find('.bedbath')
            .text()
            .trim()
            .split('|')
            .filter(room => room.length > 1)
            .map(string => {
              return string.trim();
            });
          const rooms = { bedrooms, full, half };
          const link = `http://firstweber.com/home-for-sale${$(property)
            .find('.tilelink')
            .attr('href')}`;
          const photo = $(property)
            .find('img')
            .attr('src');
          if (
            city &&
            price &&
            street &&
            link &&
            photo &&
            Object.values(rooms).filter(value => value).length >= 2
          )
            properties.push({ street, city, price, rooms, link, photo });
        });
      }
    });
    buildPreviews(properties);
  });
}
function buildPreviews(properties) {
  const payload = properties.map(property => {
    const { city, price, street, link, photo } = property;
    const { bedrooms, full, half } = property.rooms;
    const rooms = half
      ? `${bedrooms} / ${full} / ${half}</div>`
      : `${bedrooms} / ${full}</div>`;
    return `<div class="listing">
        <div class="property-photo-container">
            <img class="property-photo" src="${photo}" alt="property-preview-photo"></img>
        </div>
        <div class="property-info-container">
            <div class="city">${city}</div>
            <div class="rooms">${rooms}</div>
            <div class="price-address-container">
                <div class="price">${price} </div>
                <div class="address">${street}</div>
            </div>
            <div class="property-details">
                <a href="mailto:agent@realestateagency.com?subject=Schedule showing at ${street}">Schedule Showing</a> | <a href="${link}">View Full Listing</a>
            </div>
        </div>
    </div>`;
  });
  $('.listings').html(payload);
}
function chooseNeighborhood() {
  Object.keys(neighborhoods).forEach(id => {
    $(id).on('click', function() {
      $('.listings').empty();
      loadPropertyDetails(neighborhoods[id]);
    });
  });
}
loadPropertyDetails(searchUrl);
menuDrop();
chooseNeighborhood();