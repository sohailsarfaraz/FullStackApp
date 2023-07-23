import * as mongoose from 'mongoose';
export declare const CarSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id?: number;
    brand?: string;
    color?: string;
    model?: string;
    vin?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: number;
    brand?: string;
    color?: string;
    model?: string;
    vin?: string;
}>> & Omit<mongoose.FlatRecord<{
    id?: number;
    brand?: string;
    color?: string;
    model?: string;
    vin?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
