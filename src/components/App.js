import React from "react";
import UserCreate from './UserCreate';
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";


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
                <ColorContext.Provider value={"primary"}>
                    <LanguageContext.Provider value={this.state.language}>
                        < UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;