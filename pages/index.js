
import Header from "../componets/header.js"
import Title from "../componets/title.js"
import Card1 from "../componets/card1.js"
import Card2 from "../componets/card2.js"
import Card3 from "../componets/card3.js"
import Card4 from "../componets/card4.js"
import Card5 from "../componets/card5.js"
import Card6 from "../componets/card6.js"
import Popularrecipes from "../componets/Popular.js"
import Subscribe from "../componets/subscribe.js"
import Lura from "../componets/lura.js"
import Footer from "../componets/footer.js"
export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <section className="list">
        <div className="container">
          <div className="items">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </section>
      <Popularrecipes />
      <section className="list-popular">
        <div className="container">
          <div className="items">
            <Card4 />
            <Card5 />
            <Card6 />
          </div>
        </div>
      </section>
      <Subscribe />
      <Lura />
      <Footer />
    </>
  )
}
