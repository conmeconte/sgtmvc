
class StudentContentManagementSystem{
    constructor(sgtOptions){
        this.model = new SCMS_model();
        this.view = new SCMS_view(sgtOptions);
    }
}

class SCMS_view{
    constructor(viewOptions){
        this.interfaceElements = {};
        const defaultOptions = [
            'addButton', 'cancelButton','nameInput',
            'courseInput', 'gradeInput','studentDisplay'
        ];
        for(var option_i=0; option_i < defaultOptions.length; option_i++){
            if(viewOptions[ defaultOptions[ option_i] ]){
                this.interfaceElements[ defaultOptions[ option_i ] ] = viewOptions[ defaultOptions[ option_i] ];
            } else {
                console.error(`Missing option ${defaultOptions[ option_i ]}: terminating`);
                return false;
            }
        }
    }
    initialize(){
        
    }
}

class SCMS_model{
    constructor(){

    }
}