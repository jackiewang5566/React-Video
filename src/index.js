import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style/style.css';

const API_KEY = 'AIzaSyAM8-lc4kJQHwsACnbFNFAUjQ22Ld4-Wro';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'Movies'}, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
             });
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));