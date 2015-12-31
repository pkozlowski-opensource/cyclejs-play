import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/dom'; //bah, importing all the stuff would SO painful in practice...

function main(drivers) {
    return {
        DOM: drivers.DOM.select('input').events('input') //oh no, select('input') ???? globally???
            .map(ev => ev.target.value) //I would have to repeat this over and over again...
            .startWith('World') //I need to sync model and DOM "by hand" here...
            .map(value =>
                div([
                    input({type: 'text', value: value}),
                    p(`Hello, ${value}!`)
                ])
            )
    };
}

Cycle.run(main, {
    DOM: makeDOMDriver('#app')
});