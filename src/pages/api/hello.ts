import { url } from 'inspector';
import RSSParser from 'rss-parser';

const parseUrl= "http://netflixtechblog.com/feed"
const parser= new RSSParser();
const parse = async (url:string) => {
	const feed = await parser.parseURL(url);
	
	console.log(feed.title)
}

parse(feedURL)

// type CustomFeed = {foo: string};
// type CustomItem = {bar: number};

// const parser: Parser<CustomFeed, CustomItem> = new Parser({
//   customFields: {
//     feed: ['foo', 'baz'],
//     item: ['bar']
//   }
// });
(async () => {

  const feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title); // feed will have a `foo` property, type as a string

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link) // item will have a `bar` property type as a number
  });
})();