const express = require('express')
const app = express()
const PORT = 8000

// const savage ={
//     'age': 29,
//     'birthName': 'Sheyaa Bin Abraham-Joseph',
//     'birthLocation': 'London, England'
// }

const Stretches ={
    'Low Back': {
        'Low back rotation':{
            'description':'',
            'duration':'',
        },
        
        'Bending over low back stretch':{
            'description':'',
            'duration':'',
        },
        'Seated knee to chest':{
            'description':'',
            'duration':'',
        },
        'Seated pelvic tilt with breathing':{
            'description':'',
            'duration':'',
        },

    },

    'Hip Stretch':{
        'Kneeling psoas stretch':{
            'description':'',
            'duration':'',
        },
        'Standing psoas stretch':{
            'description':'',
            'duration':'',
        },
        'Sitting glute stretch':{
            'description':'',
            'duration':'',
        },
        'Sitting cross-body glute stretch':{
            'description':'',
            'duration':'',
        },
    },

    'Leg stretch':{
        'Seated hamstring stretch':{
            'description':'',
            'duration':'',
        },
        'Butterfly stretch':{
            'description':'',
            'duration':'',
        },
        'Standing quad stretch':{
            'description':'',
            'duration':'',
        },
        'Kneeling chair quad stretch':{
            'description':'',
            'duration':'',
        },
        'Seated abductor stretch':{
            'description':'',
            'duration':'',
        },
    },

    'Neck Stretch':{
        'Chin tuck':{
            'description':'',
            'duration':'',
        },
        'Neck extension stretch':{
            'description':'',
            'duration':'',
        },
        'Neck towel traction':{
            'description':'',
            'duration':'',
        },
        'Side-to-side neck stretch':{
            'description':'',
            'duration':'',
        },
    },

    'Shoulders':{
        'At your desk pec stretch':{
            'description':'',
            'duration':'',
        },
        'Doorway pec stretch':{
            'description':'',
            'duration':'',
        },
        'Overhead reach':{
            'description':'',
            'duration':'',
        },
        'Overhead W to Y':{
            'description':'',
            'duration':'',
        },
        'Cross body stretch':{
            'description':'',
            'duration':'',
        },
        'Lazy trap stretch':{
            'description':'',
            'duration':'',
        },
    },

    'Hands':{
        'One-by-one finger stretch':{
            'description':'',
            'duration':'',
        },
        'Wrist extensor stretch':{
            'description':'',
            'duration':'',
        },
        'Wrist flexor stretch':{
            'description':'',
            'duration':'',
        },
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request, response)=>{
    response.json(Stretches)
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})