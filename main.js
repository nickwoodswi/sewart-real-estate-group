//static page loads

function loadIndex() {
    $('.pageContent').html(`
        <div class="main-header">
            <div class="index-buttons">
                <h2>North Shore Milwaukee Luxury Specialists</h2>
                <div class="button-container">
                    <div id="buy-button" class="button">BUY</div>
                    <div id="sell-button" class="button">SELL</div>
                    <div id="learn-button" class="button">LEARN</div>
                </div>
            </div>
        </div>`
    )
};
function viewIndex() {
    $('.pageContent').html(`
        <div class="main-header">
            <div class="index-buttons">
                <h2>North Shore Milwaukee Luxury Specialists</h2>
                <div class="button-container">
                    <div id="buy-button" class="button">BUY</div>
                    <div id="sell-button" class="button">SELL</div>
                    <div id="learn-button" class="button">LEARN</div>
                </div>
            </div>
        </div>`
    );
}

function viewBuy() {
    $('#buy-button').on('click', function() {
        $('html').css('background-image', 'url(./images/background-bath.jpeg');
        $('.pageContent').html(`
        <a href="#top"><div id="scroll-up-button" class="button">^</div></a>
          
        <div class="buy-header">
          <div class="buy-intro-container">
            <div class="buy-headline-container">
              <div class="view-headline"><h1>HOME BUYING STRATEGY</h2></div>
              <div class="page-button-container">
                <div id="agency-button" class="button"><a href="#agency">BUYER AGENCY</a></div>
                <div id="market-button" class="button"><a href="#market">THE NORTH SHORE MARKET</a></div>
                <div id="offer-button" class="button"><a href="#offer">OFFER SMART</a></div>
                <div id="blog-button" class="button">BLOG</div>
              </div>
            </div>
            <div class="buy-intro">

              <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

              <ul>
                <li>This bullet that's a little bit longer</li>
                <li>Then this bullet that's cool.</li>
                <li>Then another bullet that I think will work pretty well too.</li>
              </ul>

              <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

            </div>
          </div>
        </div>

        <div class="buyers-content">

        <div id="agency" class="buyer-agency">
          <div class="buyer-agency-header">
            <h2>What Is <b>"Buyer Agency?"</b></h2>
            <div class="buyer-agency-text">
              <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

              <ul>
                <li>This bullet that's a little bit longer</li>
                <li>Then this bullet that's cool.</li>
                <li>Then another bullet that I think will work pretty well too.</li>
              </ul>

              <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

              <div class="page-button-container">
                <div id="agency-button" class="button">AGENCY GUIDE</div>
                <div id="contact-button" class="button">CONTACT US</div>
              </div>
            </div>
          </div>
        </div>

        <div id="market" class="market-section">

          <div class="market-section-header">
            <div class="market-section-header-text"><h2>Milwaukee North Shore Properties Market Research</h2></div>
            <div class="page-button-container">
              <div id="agency-button" class="button">MARKET REPORT</div>
              <div id="contact-button" class="button">CONTACT US</div>
            </div>
          </div>

          <div class="market-section-text-container">
          <div class="market-section-text">
            <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

            <ul>
              <li>This bullet that's a little bit longer</li>
              <li>Then this bullet that's cool.</li>
              <li>Then another bullet that I think will work pretty well too.</li>
            </ul>

            <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

          </div>
          </div>
        </div>

        <div id="offer" class="offer-section">
          <div class="offer-section-header">
            <h2>What's the Best Offer On a House?</h2>
          </div>
          <div class="market-section-text">
            <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

            <ul>
              <li>This bullet that's a little bit longer</li>
              <li>Then this bullet that's cool.</li>
              <li>Then another bullet that I think will work pretty well too.</li>
            </ul>

            <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

            <div class="page-button-container">
              <div id="offer-button" class="button">BEST OFFER GUIDE</div>
              <div id="contact-button" class="button">CONTACT US</div>
            </div>

          </div>
        </div>

        </div>

        `);
        viewBuy();
        viewSell();
        viewLearn();
    })
}

function viewSell() {
    $('#sell-button').on('click', function() {
        $('html').css('background-image', 'url(./images/background-ext.jpeg)');
        $('.pageContent').html(`
          <div class="selling-header">
            
            <div class="selling-header-container">
              <h2>SELLING A HOME</h2>
              <div class="page-button-container">
                <div id="staging-button" class="button"><a href="#staging">STAGING</a></div>
                <div id="valuation-button" class="button"><a href="#valuation">VALUATION</a></div>
                <div id="sell-high-button" class="button"><a href="#sellinghigh">SELLING HIGH</a></div>
              </div>
            </div>

            <div class="selling-header-text">
              <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

              <ul>
                <li>This bullet that's a little bit longer</li>
                <li>Then this bullet that's cool.</li>
                <li>Then another bullet that I think will work pretty well too.</li>
              </ul>

              <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>
            </div>
          </div>

          <div class="selling-page-content">

            <div id="staging" class="staging-section">
              <div class="staging-section-header">
                <div class="staging-section-header-text"><h2>STAGING</h2></div>
              </div>
              <div class="staging-section-text">
                <div class="staging-section-text-container">
                  <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

                  <ul>
                    <li>This bullet that's a little bit longer</li>
                    <li>Then this bullet that's cool.</li>
                    <li>Then another bullet that I think will work pretty well too.</li>
                  </ul>
    
                  <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

                </div>

                <div class="page-button-container">
                    <div id="staging-guide-button" class="button">HOME STAGING GUIDE</a></div>
                    <div id="contact-button"  class="button">CONTACT US</div>
                </div>

              </div>
            </div>

            <div id="valuation" class="valuation-section">
            
              <div class="valuation-header">
                <h2>WHAT'S A HOME WORTH?</h2>
              </div>

              <div class="valuation-text">
                <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes:</p>

                <ul>
                  <li>This bullet that's a little bit longer</li>
                  <li>Then this bullet that's cool.</li>
                  <li>Then another bullet that I think will work pretty well too.</li>
                </ul>

                <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>

                <div class="page-button-container">
                  <div id="contact-button" class="button">CONTACT US</div>
                </div>

              </div>
            </div>

            <div id="sellinghigh" class="selling-high-section">
            
              <div class="selling-high-header">
                <h2>GETTING THE MOST FROM YOUR SALE</h2>
              </div>

              <div class="selling-high-text">
              <div id="selling-button" class="button">OUR RESULTS</div>
              <p>This is test text just to see how this positions. This is not going to be here later. We're just going to talk about the buying process and about what you do. It includes?</p>

              <p>Then we conclude with a sentence or two that will get the reader to keep going, and a few buttons.</p>
              </div>
            
            </div>

          </div>
        `);
        viewBuy();
        viewSell();
        viewLearn();
    })
}

function viewLearn() {
    $('#learn-button').on('click', function() {
        $('html').css('background-image', 'url(./images/srg-group-shot.jpg)');
        $('.pageContent').html(`
        <a href="#top"><div id="scroll-up-button" class="button">^</div></a>
          
          <div class="listings-header">
            <div class="header-intro-container">
              
              <div class="view-headline"><h2>LEARN</h2></div>

              <div class="header-intro">
              <p>What matters most when you buy or sell a home in North Shore Milwaukee? The right team, the right network, staging, and experience all factor in. Learn here about Sewart Real Estate Group, our process, and our market knowledge you need for the right strategy.</p>
              </div>

              <div class="page-button-container">
                <div id="team-button" class="button"><a href="#team-section">TEAM</a></div>
                <div id="process-button" class="button"><a href="#process">PROCESS</a></div>
                <div id="blog-button" class="button">BLOG</div>
              </div>
            
            </div> 

          </div>

          <div class="team-container">
          <div class="intro-lead-container">
            <div class="team-intro">
              <div id="team-section" class="team-intro-text">
                <h3>OUR TEAM</h3>

                <p><b>Sewart Real Estate Group</b> is a top-performing home seller among First Weber Realtors, with consistent performance in the company's <b>top 5% of MLS sales</b>.</p>

                <p>For buyers, we provide expert real estate consultation that helps you:
                  <ul>
                    <li>Understand and navigate the home buying process, end-to-end</li>
                    <li>Examine multiple neighborhoods and their advantages, holistically</li>
                    <li>Envision and achieve goals for your new, ideal home</li>
                  </ul>
                </p>
            
                <p>With <b>30+ years of experience</b> in the Milwaukee North Shore and Ozaukee County real estate market, our knowledgeable, efficient, and exceptionally professional approach to residential home sales delivers accommodating and strategic pre-sale planning, beautiful staging and photography, and comprehensive marketing for faster returns on your investment and trust.</p>
                <div class="button-container">
                <div id="contact-button" class="button"><a href="mailto:team@sewartrealestategroup.com">CONTACT US</a></div>
              </div>
            </div>
          </div>
          </div>

          <div class="team-section">
            <div class="lead-member">
              <div class="headshot"><img src="images/karine-sewart-head-shot.jpg" alt="karine-sewart-photo"></div>
              <div class="lead-member-title">
                <div class="name"><h3>Karine Sewart</h3></div>
                <div class="title"><h4>Principal</h4></div>
                <div class="contact-logos">
                  <div class="phone"><img class="contact-logo" src="images/phone-logo-trans.png" alt="phone-logo"> : <a href="tel:262-247-2683">262.247.2683</a></div>
                  <div class="email"><img class="contact-logo" src="images/email-logo-trans.png" alt="email-logo"> : <a href="mailto:karine@sewartrealestategroup.com">karine@sewartrealestategroup.com</a></div>
                </div>
              </div>
              <div class="lead-bio"><p>With strong ties to the North Shore community where she was born and raised, Karine has led Sewart Real Estate for more than 13 years, taking the reins from her mother, Lisa, who founded the company 20 years prior. With a reputation as a keen negotiator, educated by the University of Wisconsin School of Business and Nicolet High School, she's delivered top sales performance among First Weber agents in Mequon, WI year after year - in between time spent with her husband, Steve, their three children, two dogs, and rounds of golf.</p></div>
            </div>

            <div class="team-member">
              <div class="team-member-header">
                <div class="headshot"><img src="images/shannon-harrigan-head-shot.jpg" alt="shannon-harrigan-photo"></div>
                <div class="team-member-title">
                  <div class="name"><h3>Shannon Harrigan</h3></div>
                  <div class="title"><h4>Operations Manager</h4></div>
                </div>
              </div>
              <div class="bio"><p>With strong ties to the North Shore community where she was born and raised, Karine has led Sewart Real Estate for more than 13 years, taking the reins from her mother, Lisa, who founded the company 20 years prior. With a reputation as a keen negotiator, educated by the University of Wisconsin School of Business and Nicolet High School, she's delivered top sales performance among First Weber agents in Mequon, WI year after year - in between time spent with her husband, Steve, their three children, two dogs, and rounds of golf.</p></div>
            </div>

            <div class="team-member">
              <div class="team-member-header">
                <div class="headshot"><img src="images/traci-kurtin-head-shot.jpg" alt="traci-kurtin-photo"></div>
                <div class="team-member-title">
                  <div class="name"><h3>Traci Kurtin</h3></div>
                  <div class="title"><h4>Agent</h4></div>
                </div>
              </div>
              <div class="bio"><p>With strong ties to the North Shore community where she was born and raised, Karine has led Sewart Real Estate for more than 13 years, taking the reins from her mother, Lisa, who founded the company 20 years prior. With a reputation as a keen negotiator, educated by the University of Wisconsin School of Business and Nicolet High School, she's delivered top sales performance among First Weber agents in Mequon, WI year after year - in between time spent with her husband, Steve, their three children, two dogs, and rounds of golf.</p></div>
          </div>

          <div class="team-member">
            <div class="team-member-header">
              <div class="headshot"><img src="images/stephanie-ciaccio-head-shot.jpg" alt="stephanie-ciaccio-photo"></div>
              <div class="team-member-title">
                <div class="name"><h3>Stephanie Ciaccio</h3></div>
                <div class="title"><h4>Agent</h4></div>
              </div>
            </div>
            <div class="bio"><p>With strong ties to the North Shore community where she was born and raised, Karine has led Sewart Real Estate for more than 13 years, taking the reins from her mother, Lisa, who founded the company 20 years prior. With a reputation as a keen negotiator, educated by the University of Wisconsin School of Business and Nicolet High School, she's delivered top sales performance among First Weber agents in Mequon, WI year after year - in between time spent with her husband, Steve, their three children, two dogs, and rounds of golf.</p></div>
        </div>

        <div class="team-member">
          <div class="team-member-header">
            <div class="headshot"><img src="images/robin-handal-head-shot.jpg" alt="robin-handal-photo"></div>
            <div class="team-member-title">
              <div class="name"><h3>Robin Handal</h3></div>
              <div class="title"><h4>Staging Coordinator</h4></div>
            </div>
          </div>
          <div class="bio"><p>With strong ties to the North Shore community where she was born and raised, Karine has led Sewart Real Estate for more than 13 years, taking the reins from her mother, Lisa, who founded the company 20 years prior. With a reputation as a keen negotiator, educated by the University of Wisconsin School of Business and Nicolet High School, she's delivered top sales performance among First Weber agents in Mequon, WI year after year - in between time spent with her husband, Steve, their three children, two dogs, and rounds of golf.</p></div>
        </div>
      </div>
      
      <div class="process-container">

        <div id="process" class="process-intro">
          <h3>PROCESS</h3>
          <p>Here's a bunch of stuff about the home buying process. Process process process. We're talking about a lot of stuff and just filling this box ith text. It's getting longer. Thinking up words, thinking more. What's the best idea? This is the best idea. Look for more here.</p>

          <div class="button-container">
            <div id="agency-button" class="button">AGENCY</div>
            <div id="listing-button" class="button">LISTING</div>
            <div id="staging-button" class="button">STAGING</div>
            <div id="finance-button" class="button">FINANCE</div>
          </div>

          <div class="process-subcontainer"></div>
        </div>
      
        <div class="chart-container">
          <img id="chart" src="images/flowchart_buying.png">
        </div>
        
      </div>
        
        `);

        viewBuy();
        viewSell();
        viewLearn();
        viewAgency();
        viewListing();
        viewStaging();
        viewFinance();
    })
}

function viewAgency() {
  $('#agency-button').on('click', function() {
    $('.process-subcontainer').html(`
      <div class="agency">

        <div class="agency-img-container"><img src="images/EUP_6997.jpg"></div>

        <div class="agency-intro">
          <h4>What Does 'Agency' Mean?</h4>
          <p>Here's a bunch of stuff about the home buying process. Process process process. We're talking about a lot of stuff and just filling this box ith text. It's getting longer. Thinking up words, thinking more. What's the best idea? This is the best idea. Look for more here.</p>
          <div class="button-container">
            <div id="download-button" class="button">DOWNLOAD</div>
            <div id="contact-us" class="button">CONTACT US</div>
          </div>
        </div>
      
      </div>
    `)
  })
}

function viewListing() {
  $('#listing-button').on('click', function() {
    $('.process-subcontainer').html(`
      <div class="agency">

        <div class="agency-img-container"><img src="images/background-ext-prev.jpg"></div>

        <div class="agency-intro">
          <h4>How To Sell Your Home</h4>
          <p>Here's a bunch of stuff about the home buying process. Process process process. We're talking about a lot of stuff and just filling this box ith text. It's getting longer. Thinking up words, thinking more. What's the best idea? This is the best idea. Look for more here.</p>

          <div class="button-container">
            <div id="selling-button" class="button">SELLING</div>
            <div id="contact-us" class="button">CONTACT US</div>
          </div>
        </div>
      
      </div>
    `)
  })
}

function viewStaging() {
  $('#staging-button').on('click', function() {
    $('.process-subcontainer').html(`
      <div class="agency">

        <div class="agency-img-container"><img src="images/Open_Concept.jpg"></div>

        <div class="agency-intro">
          <h4>Does Staging Work?</h4>
          <p>Here's a bunch of stuff about the home buying process. Process process process. We're talking about a lot of stuff and just filling this box ith text. It's getting longer. Thinking up words, thinking more. What's the best idea? This is the best idea. Look for more here.</p>

          <div class="button-container">
            <div id="selling-button" class="button">PRE-SALE GUIDE</div>
            <div id="contact-us" class="button">CONTACT US</div>
          </div>
        </div>
      
      </div>
    `)
  })
}

function viewFinance() {
  $('#finance-button').on('click', function() {
    $('.process-subcontainer').html(`
      <div class="agency">

        <div class="agency-img-container"><img src="images/Custom Kitchen.jpg"></div>

        <div class="agency-intro">
          <h4>How Does Home Financing Work?</h4>
          <p>Here's a bunch of stuff about the home buying process. Process process process. We're talking about a lot of stuff and just filling this box ith text. It's getting longer. Thinking up words, thinking more. What's the best idea? This is the best idea. Look for more here.</p>

          <div class="button-container">
            <div id="financing-button" class="button">FINANCE GUIDE</div>
            <div id="contact-us" class="button">CONTACT US</div>
          </div>
        </div>
      
      </div>`)
    $('.chart-container').html(`
        <div class="mortgage-calculator-container">
          <div class="mortgage-calculator">
            <div class="mortgage-calculator-header">
              <h4>MORTGAGE CALCULATOR</h4>
            </div>
            <div class="mortgage-calculator-detail">
              <div class="mortgage-calculator-inputs">
                
                Property Price:<br>
                  <input class="input" type="number" value="400000"></input><br>
                
                  Select County:
                    <select class="input">
                      <option>Milwaukee</option>
                      <option>Ozaukee</option>
                    </select><br>
              
                Down Payment:<br>
                  <input class="input" type="number" value="100000"></input><br>
                
                Loan Term (In Years):<br>
                  <input class="input" type="number" value="30"></input><br>
                
                Annual Interest (APR):<br>
                  <input class="input" type="number" value="3.7"></input><br>
                
                <div class="calculator-button-container">
                  <button
                    class="button"
                    type="button" 
                    id="calculate">
                    CALCULATE
                  </button>
                </div>
              
              </div>
              
              <div class="mortgage-calculator-result">
                <div class="result-header">Monthly Payment:</div>
                <div class="result">$932.75</div>
                <div class="suggested-property-intro">
                  <b>Looking for properties in this price range? Start here:</b>
                </div>
                <div class="suggested-property-detail">
                  <div class="suggested-property-image">Loading...</div>
                  <div class="suggested-property-info">Loading...</div>
                </div>
              </div>

            </div>
          </div>
        </div>
    `)
    clickHandler();
    Calculator()
  })
}

loadIndex();
viewBuy();
viewSell();
viewLearn();

//calculator

function Calculator() {
  let inputs = document.getElementsByClassName('input');
  let P = inputs[0].value;
  let county = inputs[1].value;
  let downPayment = inputs[2].value;
  let n = inputs[3].value*12;
  let apr = inputs[4].value;
  let I = apr/100;
  let M = (P-downPayment)*(((I/12)*(1+(I/12)^n))/((1+(I/12)^n-1)));
  let monthlyPayment = (M).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  let usdPayment = '$'+monthlyPayment
  $('div.result').html(`${usdPayment}`)
  let searchUrl = 'https://www.firstweber.com/homes-for-sale/'+county+'_county/0_search-price-low/'+P+'_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/';
  loadCalcPropertyDetails(searchUrl)
}

function loadCalcPropertyDetails(searchUrl) {
fetch(searchUrl)
.then((response) => {
  return response.text();
})
.then ((pageSource) => {
  const properties = [];
  $.each($(pageSource), function(_, element) {
    if (element.id === 'pagewrap') {
      const $listing = $(element).find('.props_summary .property');
      $listing.each(function(i, property) {
        const street = $(property)
          .find('.address')
          .text();
        const streetSubj = $(property)
          .find('.address')
          .text()
          .split(" ")
          .join("%20");
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
        const link = `http://firstweber.com/${$(property)
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
          properties.push({ street, city, price, rooms, link, photo, streetSubj });
      });
    }
  });
  buildCalcPreview(properties);
});
}

function buildCalcPreview(properties) {
let item = properties[Math.floor(Math.random() * properties.length)]
$('div.suggested-property-image').html(
`<img class="suggested-property-image-preview" src="${item.photo}"></img><br>`
)
if (item.rooms.half === undefined) {
$('div.suggested-property-info').html(
  `<h4>${item.price}</h4>
  <h4><b>${item.city}</b><br>
  ${item.rooms.bedrooms} / ${item.rooms.full}</h4><br> 
  <div id="finance-button-container" class="button-container">
    <div class="button"><a href="${item.link}" target="_blank">VIEW LISTING</a></div>
    <div class="button"><a href="mailto:ksewart@firstweber.com?subject=Schedule%20showing%20at%20${item.street}">SCHEDULE SHOWING</a></div>
  </div>`)
} else {
  $('div.suggested-property-info').html(
    `<h4>${item.price}</h4>
    <h4>${item.city}<br>
    ${item.rooms.bedrooms} / ${item.rooms.full}<br> 
    ${item.rooms.half}</h4><br>
    <a href="${item.link}" target="_blank">
    <div id="finance-button-container" class="button-container">
      <div class="button">VIEW LISTING</div></a>
      <a href="mailto:ksewart@firstweber.com?subject=Schedule%20showing%20at%20${item.street}"><div class="button">SCHEDULE SHOWING</div></a>
    </div>`)
}
}

function clickHandler() {
  $('#calculate').on('click', function() {
    let inputs = document.getElementsByClassName('input');
    let P = inputs[0].value;
    let county = inputs[1].value;
    let downPayment = inputs[2].value;
    let n = inputs[3].value*12;
    let apr = inputs[4].value;
    let I = apr/100;
    let M = (P-downPayment)*(((I/12)*(1+(I/12)^n))/((1+(I/12)^n-1)));
    let monthlyPayment = (M).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let usdPayment = '$'+monthlyPayment
    $('div.result').html(`${usdPayment}`)
    let searchUrl = 'https://www.firstweber.com/homes-for-sale/'+county+'_county/0_search-price-low/'+P+'_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/';
    loadCalcPropertyDetails(searchUrl)
  });
}

//property listings

function handleDropClick() {
    $('.neighborhood-selector').on('change', function() {
        let value = $(this).val()
        let idString = value.toLowerCase()
        let despacedIdString = idString.replace(/\s/g, '');
        let id = `#`+despacedIdString
        Object.keys(neighborhoods)
        chooseNeighborhood(id, value)
    })
}

function handleMilPriceFilter() {
  $('#mil-price-filter').on('click', function() {
      let value = $(this).val()
      console.log(value)
      let idString = value.toLowerCase()
      let despacedIdString = idString.replace(/\s/g, '');
      let id = `#onemil`+despacedIdString
      Object.keys(neighborhoods)
      chooseNeighborhood(id, value)
  })
}

function handleFiveKPriceFilter() {
  $('#5k-price-filter').on('click', function() {
      let value = $(this).val()
      console.log(value)
      let idString = value.toLowerCase()
      let despacedIdString = idString.replace(/\s/g, '');
      let id = `#fivek`+despacedIdString
      Object.keys(neighborhoods)
      chooseNeighborhood(id, value)
  })
}

function handleZeroPriceFilter() {
  $('#zero-price-filter').on('click', function() {
      let value = $(this).val()
      console.log(value)
      let idString = value.toLowerCase()
      let despacedIdString = idString.replace(/\s/g, '');
      let id = `#zero`+despacedIdString
      Object.keys(neighborhoods)
      chooseNeighborhood(id, value)
  })
}

function chooseNeighborhood(id, value) {
    let neighborhoodsArray = Object.entries(neighborhoods)
    neighborhoodsArray.map(neighborhood => {
      if (neighborhood[0] == id) {
        let url = (neighborhood[1])
        loadPropertyDetails(url, value)
      }
    })
    //Object.keys(neighborhoods).forEach(id => {
    //   $(id).on('click', function() {
    //     $('.pageContent').empty();
    //     loadPropertyDetails(neighborhoods[id]);
    //   });
    //});
  }

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
  '#onemilmequon':
    'https://www.firstweber.com/homes-for-sale/mequon_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekmequon':
    'https://www.firstweber.com/homes-for-sale/mequon_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zeromequon':
    'https://www.firstweber.com/homes-for-sale/mequon_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilbayside':
    'https://www.firstweber.com/homes-for-sale/bayside_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekbayside':
    'https://www.firstweber.com/homes-for-sale/bayside_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zerobayside':
    'https://www.firstweber.com/homes-for-sale/bayside_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilcedarburg':
    'https://www.firstweber.com/homes-for-sale/cedarburg_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekcedarburg':
    'https://www.firstweber.com/homes-for-sale/cedarburg_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zerocedarburg':
    'https://www.firstweber.com/homes-for-sale/cedarburg_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilfoxpoint':
    'https://www.firstweber.com/homes-for-sale/fox+point_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekfoxpoint':
    'https://www.firstweber.com/homes-for-sale/fox+point_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zerofoxpoint':
    'https://www.firstweber.com/homes-for-sale/fox+point_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilglendale':
    'https://www.firstweber.com/homes-for-sale/glendale_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekglendale':
    'https://www.firstweber.com/homes-for-sale/glendale_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zeroglendale':
    'https://www.firstweber.com/homes-for-sale/glendale_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilriverhills':
    'https://www.firstweber.com/homes-for-sale/river+hills_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekriverhills':
    'https://www.firstweber.com/homes-for-sale/river+hills_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zeroriverhills':
    'https://www.firstweber.com/homes-for-sale/river+hills_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilshorewood':
    'https://www.firstweber.com/homes-for-sale/Shorewood_combo/1000000_search-price-low/Shorewood+Drive+Oshkosh%2C+WI+54901_cbd/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekshorewood':
    'https://www.firstweber.com/homes-for-sale/Shorewood_combo/500000_search-price-low/999999_search-price-high/Shorewood+Drive+Oshkosh%2C+WI+54901_cbd/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zeroshorewood':
    'https://www.firstweber.com/homes-for-sale/Shorewood_combo/0_search-price-low/499999_search-price-high/Shorewood+Drive+Oshkosh%2C+WI+54901_cbd/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#onemilwhitefishbay':
    'https://www.firstweber.com/homes-for-sale/Whitefish+Bay_combo/1000000_search-price-low/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
 '#fivekwhitefishbay':
    'https://www.firstweber.com/homes-for-sale/Whitefish+Bay_combo/500000_search-price-low/999999_search-price-high/P_lp-cd-presentation/sc_lsearch_amt_search_price+DESC/sd_S2/',
  '#zerowhitefishbay':
    'https://www.firstweber.com/homes-for-sale/Whitefish+Bay_combo/0_search-price-low/499999_search-price-high/P_lp-cd-presentation/sc_l_listing_price+DESC/sd_S2/'
};

function loadPropertyDetails(url, value) {
  fetch(url)
  .then((response) => {
    return response.text()
  })
  .then ((pageSource) => {
    const properties = [];
    $.each($(pageSource), function(_, element) {
      if (element.id === 'pagewrap') {
        const $listing = $(element).find('.props_summary .property');
        $listing.each(function(i, property) {
          const street = $(property)
            .find('.address')
            .text();
          const streetSubj = $(property)
            .find('.address')
            .text()
            .split(" ")
            .join("%20");
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
          const link = `http://firstweber.com/${$(property)
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
            properties.push({ street, city, price, rooms, link, photo, streetSubj });
        });
      }
    });
    buildPreviews(properties, value);
  });
}
function buildPreviews(properties, value) {

  const header = `
    <a href="#top"><div id="scroll-up-button" class="button">^</div></a>
    <div class="listings-header">
      <div class="listings">
        <h2>Houses For Sale In ${value}, WI</h2>
        <div class="page-button-container">
          <div id="buy-button" class="button">BUY</div>
          <div id="sell-button" class="button">SELL</div>
          <div id="learn-button" class="button">LEARN</div>
        </div>
        <div class="page-button-container">
          <button id="mil-price-filter" value="${value}" class="button">$1,000,000+</button>
          <button id="5k-price-filter" value="${value}" class="button">$500,000-$999,999</button>
          <button id="zero-price-filter" value="${value}" class="button">UP TO $499,999</button>
        </div>
      </div>
    </div>`

  const payload = properties.map(property => {
    const { city, price, street, link, photo, streetSubj } = property;
    const { bedrooms, full, half } = property.rooms;
    const rooms = half
      ? `${bedrooms} / ${full} / ${half}</div>`
      : `${bedrooms} / ${full}</div>`;
    return `
    <div class="listing">

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
            <a href="mailto:ksewart@firstweber.com?subject=Schedule%20showing%20at%20${streetSubj}">Schedule Showing</a> | <a href="${link}" target="_blank">View Full Listing</a>
          </div>

      </div>
      
    </div>
    `;
  });
  $('.pageContent').html(header + payload);
  viewBuy();
  viewSell();
  viewLearn();
  handleMilPriceFilter();
  handleFiveKPriceFilter();
  handleZeroPriceFilter();
}

handleDropClick();
