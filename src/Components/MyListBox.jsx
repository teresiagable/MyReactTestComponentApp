import React from "react";
import deletebutton from "../assets/images/delete.png";
import _ from "lodash";

function MyListBox({ ...props }) {
    const { input, compid, compname, onClick: onClickProp } = props;

    console.log(" in myListBox");
    console.log(props);
    console.log(input);
    console.log(compid);

    function DeleteButton(id) {

        function onClick(event) {
            if (onClickProp) {
                console.log("klick",id);
                console.log("klickname", onClickProp)
                onClickProp(id);
            }
        }
        return (
            <React.Fragment>
						<img
							src={deletebutton}
							alt="delete"
							className="deleteicon"
							onClick={onClick}
						/>
            </React.Fragment>
        );
    }
    
    const theList = _.map(input.value, x => {
        console.log(x);
           
		return (
			<React.Fragment key={compname + x[compid]}>
				<li className="listrow" id={x[compid]}>
					<div className="listdiv">
						{x[compname]}
						<DeleteButton id = {x[compid]} />
					</div>
				</li>
			</React.Fragment>
		);
	});
    console.log(theList);
	return (
		<ul className="listbox" {...props}>
			{theList}
		</ul>
	);
}

export default MyListBox;
