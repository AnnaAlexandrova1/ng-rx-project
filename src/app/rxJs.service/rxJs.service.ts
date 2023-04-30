import { Observable, debounceTime, distinctUntilChanged, fromEvent, timeout } from "rxjs";
import { map } from "rxjs";



// const search$ = new Observable<Event>(observer => {
//     console.log('Start in observable')
//     const search = document.getElementById('search')
//     if (!search) {
//         console.log('element does not exist')
//     } else {
//     search.addEventListener('input', (event) => {
//     observer.next(event)
//     })
//     }

//     console.log('end in observable')
     
// })

// setTimeout только потому, что без него дом дерево отрисовывется позже чем появляется 


setTimeout(() => {
    const search$: Observable <Event> = fromEvent<Event>(
  document.getElementById('search') as HTMLInputElement,
    'input'
    )
    
    console.log('start subscribe')
    search$.pipe(
        map(event => {
            return (event.target as HTMLInputElement).value;
           
        }), debounceTime(1000),     
        // не отрабатывает если значение не измеилось
        distinctUntilChanged()
    ).subscribe(val => {
    console.log(1)
    console.log(val)
})

console.log('end subscribe')
}, 5)
