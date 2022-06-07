import Heading from '../components/Heading';
import React from 'react'
import SpentAnalysis from "./SpentAnalysis";
import DateRange from "./DateRange";

const Home = (props) => {
    return(
        <React.Fragment>
            <Heading>

            </Heading>
            {/*<TransactionList>*/}
            {/*</TransactionList>*/}
            <SpentAnalysis
                sdate={props.sdate}
                edate={props.edate}
            >
            </SpentAnalysis>
            {/*<DateRange>*/}

            {/*</DateRange>*/}
        </React.Fragment>
    )
}

export default Home;