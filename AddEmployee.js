

 function Viewself (FirstName,LastName,Email,DOB,Age,PanNumber,CityName,DistrictName,StateName,PinCode) {
    
    
    
    ko.validation.rules['PANCARD'] = {
        validator: function (val, params) {
            var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
            if (regex.test(val)) {
                return true;
            }
        },
        message: 'Enter Valid PAN Number'
    };
   

    ko.validation.rules['text'] = {
        validator: function (val, params) {
            var regex = /([A-Za-z])$/;
            if (regex.test(val)) {
                return true;
            }
        },
        message: 'Only Alphabets Allowed'
    };
    
    ko.validation.rules['age'] = {
        validator: function (val, params) {
            var regex = /([0-9])$/;
            if (regex.test(val)) {
                if(Number(val) > 0)
                    return true;
            }
        },
        message: 'Age Must be Number'
    };

    ko.validation.rules['pincode'] = {
        validator: function (val, params) {
            var regex = /([0-9]{6})$/;
            if (regex.test(val)) {
                   if(val.length == 6)
                        return true;
            }
        },
        message: 'Enter Valid Pin Code'
    };
    
    ko.validation.registerExtenders();

    var self = this;
   
    self.FirstName = ko.observable(FirstName).extend({required : true , text: true});
    self.LastName = ko.observable(LastName).extend({required : true , text: true });
    self.Email = ko.observable(Email).extend({ required : true , email: true });
    self.Age =  ko.observable(Age).extend({required : true , age:true});
    self.DOB = ko.observable(DOB).extend({ required : true});
    self.PanNumber = ko.observable(PanNumber).extend({required : true, PANCARD: true });  
    self.CityName = ko.observable(CityName).extend({required : true , text:true});
    self.DistrictName = ko.observable(DistrictName).extend({required : true , text:true});
    self.StateName = ko.observable(StateName).extend({required : true , text:true});
    self.PinCode = ko.observable(PinCode).extend({required : true,pincode:true});
    self.EmployeeLists = ko.observableArray([]);
    self.isAdded = ko.observable(false);

 
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
                Age: self.Age(),
                DOB: self.DOB(),
                PanNumber: self.PanNumber(),
                CityName : self.CityName(),
                DistrictName :self.DistrictName(),
                StateName: self.StateName(),
                PinCode :self.PinCode(), 
            };
    
            self.EmployeeLists.push(EmployeeObject); 
            console.log(self.EmployeeLists())    
		}
		else {
			alert('Please check your submission.');
		}

                
       
    }

    getEmployeeLists();
};

ko.applyBindings(new Viewself());