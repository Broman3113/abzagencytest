const checkpoints = [
    '1024', '768', '360'
]
 export const checkCheckpoint = (width) => {
    return width > checkpoints[0] ? 'Large' :
        width > checkpoints[1] ? 'Medium' :
            width > checkpoints[2] ? 'Small' : 'ExtraSmall';
}
