

 function ViewModel (FirstName,LastName,Email,Age,DOB,PanNumber,CityName,DistrictName,StateName,PinCode) {
    

    
    ko.validation.rules['PANCARD'] = {
        validator: function (val, params) {
            var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
            if (regex.test(val)) {
                return true;
            }
        },
        message: 'Enter Valid PAN Number'
    };
    ko.validation.registerExtenders();

  
   
   
    var self = this;
   
    self.FirstName = ko.observable(FirstName).extend({required : true ,  minLength: 3 , pattern: { params: '^[A-Za-z]',message:"Only Alpphabets Allowed"} });
    self.LastName = ko.observable(LastName).extend({required : true ,  minLength: 3 , pattern: { params: '^[A-Za-z]',message:"Only Alpphabets Allowed"} });
    self.Email = ko.observable(Email).extend({ required : true , email: true });
    self.Age =  ko.observable(Age).extend({required : true ,  pattern: { params: '^[0-9]',message:"Only 2 digits Numbers ", minLength: 2 } });
    self.DOB = ko.observable(DOB).extend({ required : true});
    self.PanNumber = ko.observable(PanNumber).extend({required : true, PANCARD: true });  
    self.CityName = ko.observable(CityName).extend({required : true ,  minLength: 3 , pattern: { params: '^[A-Za-z]',message:"Only Alphabets Allowed"} });
    self.DistrictName = ko.observable(DistrictName).extend({required : true ,  minLength: 3 , pattern: { params: '^[A-Za-z]',message:"Only Alpphabets Allowed"} });
    self.StateName = ko.observable(StateName).extend({required : true ,  minLength: 3 , pattern: { params: '^[A-Za-z]',message:"Only Alpphabets Allowed"} });
    self.PinCode = ko.observable(PinCode).extend({required : true ,  pattern: { params: '^[0-9]',message:"Only 6 digits Numbers ", minLength: 2 } });
    self.EmployeeLists = ko.observableArray([]);
    self.isAdded = ko.observable(false);
    self.clearFields = function clearFields() {
        self.FirstName('');
        self.LastName('');
        self.Email('');
        self.Age('');
        self.DOB ('');
        self.PanNumber('');
        self.CityName('');
        self.DistrictName('');
        self.StateName('');
        self.PinCode('');
    }

    
	
 
   function getEmployeeLists() {
        self.EmployeeLists();
    }
   
    // VALIDATE FORM
	self.errors = ko.validation.group(this, { deep: true, observable: false });
    
    self.addNewUser = function addNewUser() {
     
		if (self.errors().length === 0) {
			alert('Thank you.');
            self.isAdded(true);
            var EmployeeObject = {

          
                FirstName: self.FirstName(),
                LastName: self.LastName(),
                Email: self.Email(),
                Age:self.Age(),
                DOB: self.DOB(),
                PanNumber: self.PanNumber(),
                CityName : self.CityName(),
                DistrictName :self.DistrictName(),
                StateName: self.StateName(),
                PinCode :self.PinCode(), 
            };
    
            self.EmployeeLists.push(EmployeeObject);     
           
           
            self.clearFields();
          
    
		}
		else {
			alert('Please check your submission.');
			self.errors.showAllMessages();
		}

                
       
    }

    getEmployeeLists();
};

ko.applyBindings(new ViewModel("","","","","","","","","",""));