const wrapper = document.getElementById('airwayGrid');

const defaultConfig = {
    height: 130,
    lazy: true,
    backgroundColor: '',
    resizable: false,
    colorFromLeft: 'blue',
    colorFromRight: 'red',
    log: false,
};

const customConfig = {
    colorFromLeft: '#a339e3',
    colorFromRight: '#2ec662',
    resizable: true,
    log: true,
    lazy: true,
}

function executeAirplanes(container, userConfig = {}) {
    const config = { ...defaultConfig, ...userConfig };
    (function initConfig() {
        container.style.background = config.backgroundColor;
        container.style.height = `${config.height}px`;

        if (config.resizable) container.style.resize = 'vertical';
    
        document.documentElement.style.setProperty('--airplane-left-fill-color', config.colorFromLeft);
        document.documentElement.style.setProperty('--airplane-right-fill-color', config.colorFromRight);
    })();

    function generateAirplane() {
        const randomClass = Math.random() < 0.5 ? 'airplaneRight' : 'airplaneLeft';
    
        const randomPlane = `
            <div class="${randomClass} airplaneContent">
                <div class="airplaneLine"></div>
                <svg width="34" height="32" viewBox="0 0 34 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M23.579 -8.39233e-05H20.2106L11.7895 13.4736H2.52632C1.12842 13.4736 0 14.6021 0 16C0 17.3979 1.12842 18.5263 2.52632 18.5263H11.7895L20.2106 32H23.579L19.3685 18.5263H28.6317L31.158 21.8947H33.6843L32.0001 16L33.6843 10.1052H31.158L28.6317 13.4736H19.3685L23.579 -8.39233e-05Z" />
                </svg>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', randomPlane);
    };

    function clearAirplanes(maxLimit) {
        const airplanesFlying = container.querySelectorAll('.airplaneContent');

        airplanesFlying.forEach((airplane, index) => {
            if (index > maxLimit - 1) {
                airplane.remove();
                log('Airplane removed');
            }
        });
    };
    
    function getRandomSeconds(min, max) {   
        min = Math.ceil(min);   
        max = Math.floor(max);   
        return Math.floor((Math.random() * (max - min) + min)) * 1000;
    };
    
    let myInterval = setInterval(updateTimeout, 0); // First call to updateTimeout
    
    function updateTimeout() {
        const time = config.lazy ? getRandomSeconds(3, 6) : getRandomSeconds(0, 0);
        const airplaneCount = container.querySelectorAll('.airplaneContent').length;

        const containerHeightLimit = container.offsetHeight;
        const airplaneCountLimit = Math.floor(containerHeightLimit / 32);
    
        log(`INFO: This container fits: ${airplaneCountLimit} airplane(s) and currently we have: ${airplaneCount} airplane(s) flying!`, 'warn');

        if (airplaneCount >= airplaneCountLimit) {
            clearAirplanes(airplaneCountLimit);
        } else {
            generateAirplane();
        }
     
        clearInterval(myInterval);
    
        if (airplaneCount < airplaneCountLimit) myInterval = setInterval(updateTimeout, time);
        else log('INFO: Airplane limit reached!', 'info');
    };

    const containerHeight = container.offsetHeight;

    new ResizeObserver(() => {
        const newContainerHeight = container.offsetHeight;
        if(containerHeight === newContainerHeight) return;

        log(`Container has been resized to: ${newContainerHeight}`);
        updateTimeout();
        
    }).observe(container);

    function log(msg, type) {
        if (!config.log) return;

        const types = {
            'info': () => console.info(msg),
            'warn': () => console.warn(msg),
            'error': () => console.error(msg),
        }

        if (!types[type]) {
          return types[type]
        }

        console.log(message);
    };

};

executeAirplanes(wrapper, customConfig);