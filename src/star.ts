import { ICartesians } from './interfaces'

export class Star {
    name: string;
    x: number;
    y: number;
    z: number;
    rightAscension: number; 
    declination: number; 
    distance: number;

    constructor(
        commonName: string, 
        rightAscension: number,
        declination: number,
        distance: number
    ) {
        this.name = commonName; 
        const cartesians = this._convertToCartesian(rightAscension, declination, distance);
        this.x = cartesians.x;
        this.y = cartesians.y;
        this.z = cartesians.z;
        this.rightAscension = rightAscension; 
        this.declination = declination; 
        this.distance = distance;
    }
    
    
    private _convertDegreesToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    // ALGORITHM     
    //      A = (RightAscension_hours * 15) + (RightAscension_minutes * 0.25) + (RightAscension_seconds * 0.004166)
    //      B = ( ABS(Declination_degrees) + (Declination_minutes / 60) + (Declination_seconds / 3600)) * SIGN(Declination_Degrees)
    //      C = distance in light years or parsecs
    //      X = (C * cos(B)) * cos(A)
    //      Y = (C * cos(B)) * sin(A)
    //      Z = C * sin(B)
    // EXAMPLE OUTPUTS OF CONVERSION
    //      Tau Ceti: X1 = 10.283036, Y1 = 5.019159, Z1 = -3.267598
    //      BY Draconis: X2 = 4.898169, Y2 = -32.842914, Z2 = 42.075062
    private _convertToCartesian(rightAscension: number, declinationDegrees: number, distance: number ): ICartesians {
        const a = this._convertDegreesToRadians( rightAscension * 15 );
        const b = this._convertDegreesToRadians( Math.abs(declinationDegrees) * Math.sign(declinationDegrees) );
        const c = distance;

        return {
            x: (c * Math.cos(b)) * Math.cos(a),
            y: (c * Math.cos(b)) * Math.sin(a),
            z: (c * Math.sin(b))
        }
    }

    // // Converts Right-Ascension, Declination, and Distance to Cartesian Coordinates
    // // 'declination' should be passed in as decimal degrees (0-360)
    // // 'rightAscension' should be passed in as decimal hours (0-24)
    // // 'distance' should be passed in as parsecs. To convert parsecs to light-years, multiply by 3.262    
    // // https://math.stackexchange.com/questions/52936/plotting-a-stars-position-on-a-2d-map
    // private _convertSphericalToCartesian ( rightAscension: number, declination: number, distance: number ): ICartesians {
    //     let phi: number = this._convertDegreesToRadians(rightAscension * 15);
    //     let theta: number= this._convertDegreesToRadians(declination); 
    //     let rho: number = distance;
    //     let rVector: number = rho * Math.cos(theta);

    //     return {
    //         x: rVector * Math.cos(phi),
    //         y: rVector * Math.sin(phi),
    //         z: rho * Math.sin(theta)
    //     };
    // }
}