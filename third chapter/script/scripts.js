let headers = ['Book', 'Author', 'Language', 'Published', 'Sales'];
let data = [['The Lord of the Rings', 'J.R.R. Tolkien', 'English', '1954-1955', '150 million'],
            ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupery', 'French', '1943', '140 million'],
            ["Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 'English', '1997', '107 million'],
            ['And Then There Were None', 'Agatha Chrisite', 'English', '1939' , '100 million'],
            ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1754-1791', '100 million'],
            ['The Hobbit', 'J.R.R. Tolkien', 'English', '1937', '100 million' ],
            ['She : A History of Adventure', 'H. Rider Huggard', 'English' , '1887', '100 million']
        ];

let Excel = React.createClass({
    displayName: 'Excel',
    propTypes:{
        headers: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        initialData:React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(
                React.PropTypes.string
            )
        )
    },
    getInitialState: function(){ return {data: this.props.initialData};
    },
    render: function(){
        return(
            React.DOM.table(null,
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map((title , index)=>React.DOM.th({key: index},title)
                        )
                    )
                ),
                React.DOM.tbody(null,this.state.data.map((row,index)=>{
                    return(
                        React.DOM.tr({key: index},
                        row.map((cell,index)=>React.DOM.td({key: index},cell)))
                    )
                }))
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Excel,{
        headers: headers,
        initialData: data,
    }),
    document.getElementById('app')
);