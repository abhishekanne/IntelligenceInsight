export type MasterData = {
    user: User
    date: string
    data: Data[]
}

export type Data={
    
        taskNo: number
        task: string
        status: string
        taskData: {
          slack: SlackMessage[]
          miro: MrioMessage[]               
          jira:JiraMessage[]
          m365:m365Message[]
          actions: Actions
          genai: GenAIMessages
   }
}
  export type User ={
        id: string
        name: string
        email: string
        role: string
        department: string
        location: string

      }
  
      export type SlackMessage ={
        timestamp: string
        message: string
      }
      

      export type MrioMessage ={
        timestamp: string
        activity: string
      }

      export type m365Message ={
        timestamp: string
        event: string
      }

      export type JiraMessage ={
        timestamp: string
        issue_id: string
        summary: string
      }

      export type Actions ={
        email: EmailAction
        meeting: MeetingAction
      }
      
      export type EmailAction ={
        timestamp: string
        subject: string
        content: string
      }
      export type MeetingAction ={
        timestamp: string
        with: string
        agenda: string
        location: string
      }

      export type GenAIMessages={
        slack:GenAISummery
        miro:GenAISummery
        jira:GenAISummery
        m365:GenAISummery

      }
      export type GenAISummery ={
        summary : string
      }

  