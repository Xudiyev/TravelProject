import './_categories.scss'
export default function Categories() {
  return (
         <section>
            <div className='categoriesContainer' >
                    <button type='submit'className='allcategoriesBTN' >All articles</button>
                    <button type='submit' >Food & Drink</button>
                    <button type='submit' >Inspiration</button>
                    <button type='submit' >Local Guides</button>
                    <button type='submit' >See & Do</button>
                    <button type='submit' >Travel Tips</button>
                    <button type='submit' >Where to stay</button>

            </div>
         </section>

    )
}