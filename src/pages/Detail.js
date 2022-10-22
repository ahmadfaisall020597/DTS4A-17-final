import { Container, Typography } from "@mui/material";

function DetailPage() {
  return (
    <div className='container my-3'>
        <h1>NewsStar top headlines</h1>
        <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4 mt-2" key={element.url}>
                    {/* <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Nest &rarr;</button>
        </div>
    </div>
)
}

export default DetailPage;
