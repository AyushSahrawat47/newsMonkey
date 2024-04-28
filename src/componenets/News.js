import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Yemen’s Houthis damage oil tanker, shoot down US drone - Al Jazeera English",
        "description": "MV Andromeda Star suffers damage and MQ-9 Reaper drone shot down in latest escalation by the Houthis.",
        "url": "https://www.aljazeera.com/news/2024/4/27/yemens-houthis-damage-oil-tanker-shoot-down-us-drone",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/2020-07-01T000000Z_1364755301_RC2GKH9ZDZGB_RTRMADP_3_ESTONIA-MILITARY-REAPER-DRONE-1714203121.jpg?resize=1920%2C1440",
        "publishedAt": "2024-04-27T08:45:18Z",
        "content": "Yemens Houthis have damaged an oil tanker and downed another MQ-9 Reaper drone of the United States as they promise more attacks in opposition to Israels war on Gaza.\r\nThe Iran-aligned groups militar… [+3980 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Michael Williams, Kayla Tausche, Kevin Liptak, MJ Lee",
        "title": "White House Correspondents’ Dinner gives Biden a chance to flex his funny bone - CNN",
        "description": "President Joe Biden on Saturday night will attend the White House Correspondents’ Dinner, giving the president a stage and primetime slot to needle the media and his rival former President Donald Trump.",
        "url": "https://www.cnn.com/2024/04/27/politics/joe-biden-white-house-correspondents-dinner/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230429225947-03-white-house-correspondents-dinner-2023-biden.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-27T08:00:00Z",
        "content": "President Joe Biden on Saturday night will attend the White House Correspondents Dinner, giving the president a stage and primetime slot to needle the media and his rival former President Donald Trum… [+6944 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Gaza protests: Police raid on Columbia protest ignited campus movement - BBC.com",
        "description": "The university president's decision to bring in the NYPD lit a wildfire of protest over the Gaza war.",
        "url": "https://www.bbc.com/news/world-us-canada-68906215",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/05C1/production/_133237410_8e8f54805faedadfc302c356daf635454c87a7d80_0_5695_36091000x634.jpg",
        "publishedAt": "2024-04-27T07:35:29Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "NPR"
        },
        "author": null,
        "title": "Tornadoes collapse buildings and level homes in Nebraska and Iowa - NPR",
        "description": "Tornadoes wreaked havoc Friday in the Midwest, causing a building to collapse with dozens of people inside and destroying and damaging hundreds of homes, many around Omaha, Nebraska.",
        "url": "https://www.npr.org/2024/04/27/1247643877/tornadoes-collapse-buildings-and-level-homes-in-nebraska-and-iowa",
        "urlToImage": "https://media.npr.org/assets/img/2024/04/27/ap24117852872143_wide-053248000207f9ff9c4d1cddb57960687df27e40-s1400-c100.jpg",
        "publishedAt": "2024-04-27T06:53:22Z",
        "content": "Damaged houses are seen after a tornado passed through the area near Omaha, Neb., on Friday, April 26, 2024.\r\nChris Machian/AP\r\nOMAHA, Neb. Tornadoes wreaked havoc Friday in the Midwest, causing a bu… [+6778 chars]"
    },
  ]

  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h2 className='my-5'>Top headlines</h2>
          <div className="row my-5">
          {this.state.articles.map((element)=>{
           return ( <div className="col-md-4 my-3" key={element.url}>
              <NewsItem  title={element.title.slice(0, 45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl = {element.url} />
            </div>)
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
