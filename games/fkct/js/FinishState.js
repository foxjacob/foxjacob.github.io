function OnEnterFinishState() {
    ptwUI.showFinishUI();

}

function OnExitFinishState()
{
}

var FinishState = new State( OnEnterFinishState, OnExitFinishState );

