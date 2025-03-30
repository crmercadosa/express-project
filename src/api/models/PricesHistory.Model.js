import * as mongoose from 'mongoose';

const ztpriceshistoryschema  = new mongoose.Schema({
    ID : { type : Number, required : true },
    DATE : { type : String, required : true },
    OPEN  : { type : Number, required : true },
    HIGH         : { type : Number, required : false },
    LOW        : { type : Number, required : false },
    CLOSE          : { type : Number, required : false },
    VOLUME  : { type : Number, required : false }
});

//Prices History

export default mongoose.model( 
    'ZTPRICESHISTORY', 
    ztpriceshistoryschema, 
    'ZTPRICESHISTORY' 
  );