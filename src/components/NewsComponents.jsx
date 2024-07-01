import React,{useState,useEffect} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export default class NewsComponents extends Component {
  // static defaultProps={
  //   country:'in',
  //   pageSize:8,
  //   category:'sports'
  // }
  // static propTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category:PropTypes.string
  // }
  const NewsComponents=(props)=>{
    //set the initial value of the state and in the later part of time update the value(setState)
    const [articles,setArticles]=useState([]);//initial val is empty array
    const [loader,setLoading]=useState(true);//by default loading:true
    const [page,setPage]=useState(1);
    const[totalResults,setTotalResults]=useState(0);
    
  const capitaliseFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

//called 1st
//if you want to use props inside th econstructor then 1st u need to pass it
// constructor(props){
//   super(props);
//   console.log("const");
 
//   this.state={
//     articles:this.articles,
//     loader:false,
//     page:1,
//     totalResults:0
//   }   
// }
// async updateNews(){
const updateNews=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cf5ec01a7414b36bb54bb2230241adc&page=${page}&pageSize=${props.pageSize}`;//url from news api(key)
  // this.setState({loader:true})
  setLoading(true);
  let data=await fetch(url);//fetch api used to fetch data from the api->returns a promise
  let parsedata= await data.json();
  // this.setState({
  //   articles: parsedata.articles,
  //   totalResults:parsedata.totalResults,
  //   loader:false
  // })
  setArticles(parsedata.articles);
  setTotalResults(parsedata.totalResults);
  setLoading(false);    
}
//called 3rd
//  async componentDidMount(){
//in place of componentDidMount, useEffect is used and after comma is a empty bracket since we are not doing the task on any change
useEffect(()=>{
  // this.updateNews();
  // document.title=` ${this.capitaliseFirstLetter(props.category)}-NewsGorilla`;
  updateNews();
},[])
  // //called after render and render called after constructor
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cf5ec01a7414b36bb54bb2230241adc&page=${this.state.page}&pageSize=${props.pageSize}`;//url from news api(key)
  // let data=await fetch(url);//fetch api used to fetch data from the api->returns a promise
  // let parsedata= await data.json();
  // this.setState({
  //   articles: parsedata.articles,
  //   totalResults:parsedata.totalResults
  // })
  
  // pageSize=per page how many results
  //totalResults means how many total news is there to be displayed}



// handleNextclick= async ()=>{
  const handleNextclice=()=>{
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cf5ec01a7414b36bb54bb2230241adc&page=${this.state.page+1}&pageSize=${props.pageSize}`;//url from news api(key)
  // this.setState({loader:true})
  // let data=await fetch(url);//fetch api used to fetch data from the api->returns a promise
 
  // let parsedata= await data.json();
  // console.log(parsedata);
  // this.setState({
  //   articles: parsedata.articles,
  //   page:this.state.page+1,
  //   loader:false
  // })
  // this.setState(
  //   {
  //     page:this.state.page+1
  //   }
  // )
  setPage(page+1);
  updateNews();
}
const handlePrevclick= async()=>{
  
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cf5ec01a7414b36bb54bb2230241adc&page=${this.state.page-1}&pageSize=${props.pageSize}`;//url from news api(key)
  // this.setState({loader:true})
  // let data=await fetch(url);//fetch api used to fetch data from the api->returns a promise
  
  // let parsedata= await data.json();
  // console.log(parsedata);
  // this.setState({
  //   articles: parsedata.articles,
  //   page:this.state.page-1,
  //   loader:false
  // })
  // this.setState({page:this.state.page})
  setPage(page-1);
  updateNews();

}
 const fetchMoreData=async ()=>{
  
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cf5ec01a7414b36bb54bb2230241adc&page=${page+1}&pageSize=${props.pageSize}`;//url from news api(key)\
  setPage(page+1);
  //here mannually changed page as page+1 in the url and then did setPage(page+1), because it in an async function aso does not set the page to page+1 so 1st made change in th eurl only and then set so that no bug should be there.
  let data=await fetch(url);//fetch api used to fetch data from the api->returns a promise
  let parsedata= await data.json();
  // this.setState({
  //   articles: this.state.articles.concat(parsedata.articles),
  //   totalResults:parsedata.totalResults,   
  // })
  setArticles(articles.concat(parsedata.articles));
  setTotalResults(parsedata.totalResults);
};
//called 2nd
  // render() {
  
  //  document.title=props.category;->this will also work but we passes in constructor because it is called before render
    return (
      <>
      
      <h1 className='text-center my-6 mb-4' style={{marginTop:'90px'}}>NewsGorilla-Top {capitaliseFirstLetter(props.category)} Headlines</h1>
       
        <div className="container my-3">      
      <div className="row">
       {articles && articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
         <Newsitem  title={element.title?element.title.slice(0,18):""} description={element.description?element.description.slice(0,70):""} imgurl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/lTlOJ2nFnOg/maxresdefault.jpg"} newscontinue={element.url}/>
         
       </div>
              
       })}
       {/* moving to another page means loading is true then show spinner */}
        {loader && <div className="text-center"><Spinner/></div>}
        {articles && <div className="text-center">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}/></div>
        }
        </div>
        
        </div>
       {/* <div className='container d-flex justify-content-between my-3'> 
         <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr;Previous</button>
         <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next&rarr;</button> </div>*/}
         {/* this means that :-
                    totalResults=total news
                    pageSize=props.pageSize=per page how many news displayed(20)
                    no. of pages required=totalResults/props.pageSize
                    if it comes that there will be 3 pages in which the results can be displayed then if next page,ie.,page+1 becomes greater than the total pages calculated then disable the next button, and Math.ceil gives the next greater int 
                    exam->Math.ceil(3.2)=4
          */}
       </>
         
       
    )
  }

NewsComponents.defaultProps={
  country:'in',
  pageSize:8,
  category:'sports'
}
NewsComponents.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default NewsComponents;