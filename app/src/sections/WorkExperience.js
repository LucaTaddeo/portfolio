import {Avatar, Badge, Collapse, Text} from "@nextui-org/react";
import React from "react";
import JOBS from "../data/jobs";
import SectionContainer from "../components/SectionContainer";

const CollapseTitle = ({position, companyName, from, to}) => {
    return (<div
        style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "2rem",
            alignItems: "left",
            flexDirection: "column",
        }}
    >
        <Text h4>
            {position}
            {companyName && " @ " + companyName}
        </Text>
        {from && (<Text size="small">
            {from} - {to || "Today"}
        </Text>)}
    </div>);
};

const WorkExperience = () => {
    return <SectionContainer title="Experience">
        <Collapse.Group splitted style={{padding: 0}}>
            {JOBS.map((job) => (<Collapse
                style={{paddingTop: 0}}
                title={<CollapseTitle
                    position={job.position}
                    companyName={job.companyName}
                    companyUrl={job.companyUrl}
                    from={job.from}
                    to={job.to}
                />}
                contentLeft={job.logo ? <Avatar src={job.logo} squared/> : null}
            >
                <div style={{padding: "0 0.5rem"}}>
                    {job.description}
                    <div style={{marginTop: "0.75rem"}}>
                        {job.primarySkills?.map((skill, i) => (<Badge
                            key={i}
                            color="secondary"
                            enableShadow
                            disableOutline
                            isSquared
                            style={{
                                marginLeft: i !== 0 && "0.75rem",
                                marginRight: i === job.primarySkills.length - 1 && "0.75rem",
                            }}
                            size="sm"
                        >
                            {skill}
                        </Badge>))}
                        {job.secondarySkills?.map((skill, i) => (<Badge
                            key={i}
                            color="secondary"
                            variant="flat"
                            disableOutline
                            isSquared
                            style={{
                                marginLeft: i !== 0 && "0.75rem",
                                marginRight: i === job.secondarySkills.length - 1 && "0.75rem",
                            }}
                            size="sm"
                        >
                            {skill}
                        </Badge>))}
                    </div>
                </div>
            </Collapse>))}
        </Collapse.Group>
    </SectionContainer>;
};

export default WorkExperience;
