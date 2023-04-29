

const parent = React.createElement("div",{id : "parent"},
                [
                   React.createElement("div",{id : "child"},
                       [
                        React.createElement("h1",{},"I am header 1"),
                        React.createElement("h2",{},"I am header 2")
                       ]),
                       React.createElement("div",{id : "child2"},
                       [
                        React.createElement("h1",{},"I am header 1"),
                        React.createElement("h2",{},"I am header 2")
                       ]) 
                    ]

                );

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);