namespace Subjects {
    export class React extends Subject{
        getRequirements() {
            return "Here is the list of requirements for React";
        };

        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingReact) return "No available teacher";
        
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }

    export interface Teacher {
        experienceTeachingReact? : number;
    }
}
