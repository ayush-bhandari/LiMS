export default function config($mdThemingProvider,$httpProgressOpsProvider)
{
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');

    $httpProgressOpsProvider.setOps({
        background: 'yellow',
        startAt : 30,
        autoPauseAt : 90,
        http : true
    });

}