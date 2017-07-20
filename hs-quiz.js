

var start = new Date();

function calculateResult(){
var result = 0;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;
var q9 = 0;
var q10 = 0;

// get the selected radio button from each question
// alert('test');
var questionOne = $("input:radio[name='my_website_traffic_is_']:checked").val()
var questionTwo = $("input:radio[name='the_main_focus_of_our_website_is_on_']:checked").val()
var questionThree  = $("input:radio[name='we_update_our_website_content_']:checked").val()
var questionFour = $("input:radio[name='our_approach_to_thought_leadership_is_']:checked").val()
var questionFive = $("input:radio[name='i_would_describe_the_collaboration_between_our_marketing_and_sales_teams_as_']:checked").val()
var questionSix = $("input:radio[name='we_measure_the_factors_that_drive_wins_and_losses_']:checked").val()
var questionSeven = $("input:radio[name='marketing_regularly_researches_']:checked").val()
var questionEight = $("input:radio[name='we_use_software_tools_for_']:checked").val()
var questionNine= $("input:radio[name='our_approach_to_the_development_of_case_studies_and_webinars_can_be_best_described_as_']:checked").val()
var questionTen  = $("input:radio[name='our_marketing_department_is_led_by_']:checked").val()

// determine a value for each question
// q1
if (questionOne == '1_0') { q1 = 0; qv1 = '0'; }
else if (questionOne == '1_1') { q1 = 1; qv1 = '1'; }
else if (questionOne == '1_2') { q1 = 2; qv1 = '2'; }
else { q1 = 3; qv1 = '3'; }
// q2
if (questionTwo == '2_0') { q2 = 0; qv2 = '0'; }
else if (questionTwo == '2_1') { q2 = 1; qv2 = '1'; }
else if (questionTwo == '2_2') { q2 = 2; qv2 = '2'; }
else { q2 = 3; qv2 = '3'; }
// q3
if (questionThree == '3_0') { q3 = 0; qv3 = '0'; }
else if (questionThree == '3_1') { q3 = 1; qv3 = '1'; }
else if (questionThree == '3_2') { q3 = 2; qv3 = '2'; }
else { q3 = 3; qv3 = '3'; }
// q4
if (questionFour == '4_0') { q4 = 0; qv4 = '0'; }
else if (questionFour == '4_1') { q4 = 1; qv4 = '1'; }
else if (questionFour == '4_2') { q4 = 2; qv4 = '2'; }
else { q4 = 3; qv4 = '3'; }
// q5
if (questionFive == '5_0') { q5 = 0; qv5 = '0'; }
else if (questionFive == '5_1') { q5 = 1; qv5 = '1'; }
else if (questionFive == '5_2') { q5 = 2; qv5 = '2'; }
else { q5 = 3; qv5 = '3'; }
// q6
if (questionSix == '6_0') { q6 = 0; qv6 = '0'; }
else if (questionSix == '6_1') { q6 = 1; qv6 = '1'; }
else if (questionSix == '6_2') { q6 = 2; qv6 = '2'; }
else { q6 = 3; qv6 = '3'; }
// q7
if (questionSeven == '7_0') { q7 = 0; qv7 = '0'; }
else if (questionSeven == '7_1') { q7 = 1; qv7 = '1'; }
else if (questionSeven == '7_2') { q7 = 2; qv7 = '2'; }
else { q7 = 3; qv7 = '3'; }
// q8
if (questionEight == '8_0') { q8 = 0; qv8 = '0'; }
else if (questionEight == '8_1') { q8 = 1; qv8 = '1'; }
else if (questionEight == '8_2') { q8 = 2; qv8 = '2'; }
else { q8 = 3; qv8 = '3'; }
// q9
if (questionNine == '9_0') { q9 = 0; qv9 = '0'; }
else if (questionNine == '9_1') { q9 = 1; qv9 = '1'; }
else if (questionNine == '9_2') { q9 = 2; qv9 = '2'; }
else { q9 = 3; qv9 = '3'; }
// q10
if (questionTen == '10_0') { q10 = 0; qv10 = '0'; }
else if (questionTen == '10_1') { q10 = 1; qv10 = '1'; }
else if (questionTen == '10_2') { q10 = 2; qv10 = '2'; }
else { q10 = 3; qv10 = '3'; }

result = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
result = (result / 30) * 100; 
result = Math.round(result);
resultDetailed = 'traffic=' + qv1 + ' focus=' + qv2 + ' contentUpdate=' + qv3 + ' thoughtLead=' + qv4 + ' collab=' + qv5 + ' measureWinLoss=' + qv6 + ' research=' + qv7 + ' softwareTools=' + qv8 + ' caseStudiesWebinar=' + qv9 + ' marketingLead=' + qv10;



var timeElapsed = new Date() - start;
timeElapsed = timeElapsed / 1000;
timeElapsed = timeElapsed.toFixed(0);


console.log(timeElapsed);
     
    // write the result into the hidden result field in the form ...
    $('input[name="diagnostic_result"]').val( result );
    $('input[name="results_quicklook"]').val( resultDetailed + ' timeElapsed=' + timeElapsed + 'sec');
     
    // ... and also display it on the page
    // document.getElementById("resultContainer").innerHTML=result + ' €';
    // $( "#resultContainer" ).text( 'You scored: ' + result + '%' ).appear();
     // $( "#resultContainer" ).text( 'Thank you for your submission. We will look over your answers and contact you to discuss.' ).appear();
};
