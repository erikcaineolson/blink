/**
 * @author  Erik C. Olson   erikcaineolson@gmail.com
 */
function Blink(blink_interval){
    var dom_length, my_dom, my_element, my_element_type, random_element, show_interval;

    // retrieve all of the body children and determine the length of the array
    my_dom = $('body').get();
    dom_length = my_dom[0].children.length;

    // pick a random number in (0, dom_length)
    random_element = Math.floor((Math.random() * dom_length));

    // select the element
    my_element = my_dom[0].children[random_element];
    my_element_type = Object.prototype.toString.call(my_element);

    /*
    ***uncomment for debugging***
    console.log(my_element);
    console.log(my_element_type);
    */

    // make it blink!
    //  ignore script and link elements
    if(my_element_type !== '[object HTMLScriptElement]' && my_element_type !== '[object HTMLLinkElement]' && my_element_type !== '[object HTMLStyleElement]'){
        setInterval(function(){
            if(my_element.className == 'showMe'){
                my_element.className = 'hideMe';
                //console.log('hide');                      // uncomment for debugging
            }else{
                my_element.className = 'showMe';
                //console.log('show');                      // uncomment for debugging
            }
        }, blink_interval);
    }
}
