import { useState } from 'react';
import { Alert, Text, View, Modal, ModalProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Activity, CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {

  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordUserToClipBoard() {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord Copiado!', 'Discord do usuário copiado para área de transferência');
    setIsCopying(false);
  }
  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={28}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Let´s Play!"
            subtitle="Agora é só começar"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione no discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipBoard}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}