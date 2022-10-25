import React from "react";
import UserCreate from './UserCreate';

class App extends React.Component {
    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState ({ language});
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    select a lingo:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                < UserCreate />
            </div>
        );
    }
}

export default App;