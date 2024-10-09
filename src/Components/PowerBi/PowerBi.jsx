import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'
import './PowerBi.css'


function PowerBi () {
    return(
       <>

<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: '5a9199f1-5f52-4eb4-b789-5a7bade79491',
		embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=5a9199f1-5f52-4eb4-b789-5a7bade79491&groupId=716f2ba3-9eb8-4842-9149-2987b7398115&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDhkNWNlOTUtYmMzZS00M2QxLWI5YmEtODM0N2U4N2E4YTVjLyIsImlhdCI6MTcyMTMwOTczMSwibmJmIjoxNzIxMzA5NzMxLCJleHAiOjE3MjEzMTM5MzQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUEyOXY1bWFZaHhObWZBWmo2VzdzUlpHVUJ0SEI2b0kvNWk3c2tSSW1ZMlI3R0J5Yjd3dy92b3g2bHF1bmZOaEhUelVpYncyanp1RHQ4b1U3cGdoQ0pXcFEyVzV4V1NvZkhVNDhFRExBZHd2OD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJSaWJlaXJvIiwiZ2l2ZW5fbmFtZSI6IkVscGlkaW8iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxODcuODcuMTMwLjM1IiwibmFtZSI6IkVscGlkaW8gUmliZWlybyIsIm9pZCI6ImFhM2RiNWRlLTc3NGItNDc4Ny05NDViLTdlMjc2ZDI4NGIyOSIsInB1aWQiOiIxMDAzMjAwMzc2MDlFRkQyIiwicmgiOiIwLkFjb0FsYzdWMkQ2ODBVTzV1b05INkhxS1hBa0FBQUFBQUFBQXdBQUFBQUFBQUFENkFOWS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiI3ZmloTEdYVHIwSklBNHlGN0c4SkhDLXVhU0plTGtqN3hMc0hjS2dPLU9nIiwidGlkIjoiZDhkNWNlOTUtYmMzZS00M2QxLWI5YmEtODM0N2U4N2E4YTVjIiwidW5pcXVlX25hbWUiOiJlbHBpZGlvcmliZWlyb0BuZXRvcGxhbmVqYW1lbnRvLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImVscGlkaW9yaWJlaXJvQG5ldG9wbGFuZWphbWVudG8ub25taWNyb3NvZnQuY29tIiwidXRpIjoiQ1ZBZVpMelVzVW1BREtIZExDMXpBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjggMSIsInhtc19wbCI6InB0LUJSIn0.D-VsJOjmrx5-LIxrrKvsVmtuvIgS1Ktokma9iAZt9swbn4CJLkN4FceCqUUMcPr7pxQbOQixAkdc-bE8PvzwTKSVRs3ExyPfJs4pc9NZUSMpJWTjKNlm9ZmDyjtorxKGTAepDAKkLGu9jMQ_XLuU3-mDyBoS4lj34GjPbGTMW5U0SZzaI9wjt0xV06wI5qXoSDS6yZKH2Z1g0aHyoYL-fNQtG2LtxOpKaIba19G5FwBMww_OQjjbQDS7YZeFnt7OMrJT5M4sKGgem_QNMHQ4s4sxZ2c4frO4j9N39FDwmuNpp3u4xegdb7o7vHuEYloHowzj7coEmgmP6utqHfJjAQ',
		tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			 background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "reportClass" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport;
	}}
/>
       </> 
    )
}


export default PowerBi;