import { useNavigation } from "@react-navigation/native";
import { Divider, Layout, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyIcon } from "../components/ui/MyIcon";
import { TouchableWebElement } from "@ui-kitten/components/devsupport";
import { useAuthStore } from "../store/auth/useAuthStore";


interface Props {
    title: string;
    subTitle?: string;

    rightAction?: () => void;
    rightActionIcon?: string;

    children: React.ReactNode;
}

export const MainLayout = ({
    title,
    subTitle,
    rightAction,
    rightActionIcon,
    children,
}:Props) => {

    const { logout } = useAuthStore();

    const {top} = useSafeAreaInsets();
    const { canGoBack, goBack } = useNavigation();

    const renderBackAction = (): TouchableWebElement  => (
        <TopNavigationAction
        icon={ <MyIcon name="arrow-back-outline" /> }
        onPress={ goBack }
        />
    );

/*
const RenderRightAction = ()  => {
        if ( rightAction === undefined || rightActionIcon === undefined ) return null;

        return (
            <TopNavigationAction
            onPress={ rightAction }
            icon={ <MyIcon name={rightActionIcon} /> }
            />
        )
    }
*/

// accessoryRight={ () => < RenderRightAction /> }

    const renderRightAction = (): TouchableWebElement  => (
            <TopNavigationAction
            icon={ <MyIcon name="log-out" /> }
            onPress={ logout }
            />
    );


    return (
        <Layout style={{ paddingTop: top }}>
            <TopNavigation 
            title={ title }
            subtitle={ subTitle }
            alignment='center'
            accessoryLeft={ canGoBack() ? renderBackAction : undefined }
            accessoryRight={ renderRightAction }
            />
            <Divider />

            <Layout style={{ height:'100%' }}>
                {children}
            </Layout>

        </Layout>
    );
};