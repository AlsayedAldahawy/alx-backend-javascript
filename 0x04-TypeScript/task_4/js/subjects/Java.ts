namespace Subjects {
    export class Java extends Subject{
        getRequirements() {
            return "Here is the list of requirements for Java";
        };

        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingJava) return "No available teacher";
        
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }

    export interface Teacher {
        experienceTeachingJava? : number;
    }

}
