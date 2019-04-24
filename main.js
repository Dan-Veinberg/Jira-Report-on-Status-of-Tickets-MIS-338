var JiraClient = require('jira-connector');
 
var jira = new JiraClient( {
    host: 'ticketmanager.atlassian.net',
    basic_auth: {
        base64: 'ZGFudkB0aWNrZXRtYW5hZ2VyLmNvbTpaSEJkNktrakd5WkdlaDhSN0k0ZTM0QTc'
    }

});
var Ticket_Status = (arrayoftickets) =>{

    for (i = 0; i < arrayoftickets.length; i++)
    {
        jira.issue.getIssue({
            issueKey: arrayoftickets[i]
        }, function(error, issue) {
            console.log('Title: ' + issue.fields.summary);
            console.log('Status: ' + issue.fields.status.name)
            console.log('Reporter: ' + issue.fields.reporter.name)
            console.log('Assignee: ' + issue.fields.assignee.name)
            var time_estimate = issue.fields.timeestimate
        
            if (time_estimate != null)
            {
                console.log('Estimated Time: ' + issue.fields.timeestimate) 
            }
            else if (time_estimate == null)
            {
                console.log('Estimated Time: No time estimate provided')
            }

            console.log('\n')
            
        });
    }
    
}

Ticket_Status(['MIS-335','MIS-338','SO-12251'])









